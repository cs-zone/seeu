package com.seeu.seeuaction;

import java.sql.ResultSet;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.json.JSONObject;

import com.seeu.db.DBFactory;
import com.seeu.db.DataBase;
import com.seeu.serverlet.IWebApiService;
/**
 * 用户注册Action
 * */
public class UserRegestAction implements IWebApiService{
	private static Logger logger = Logger.getLogger(UserRegestAction.class);
	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) {
		String verifCode  = request.getParameter("verifCode");
		String sessionVCode = (String) request
				.getSession().getAttribute("CERTPIRCSTR");
		JSONObject result = null;
		//判断验证码是否正确
		if(verifCode == null ||
				!verifCode.equalsIgnoreCase(sessionVCode)){
			return "{\"status\":\"0\",\"msg\":\"验证码输入错误\"}";
		}
		DataBase db = DBFactory.createDB();
		try{
			//检查用户名是否重复
			String chkName = checkName(request, db);
			if(chkName != null){
				return chkName;
			}
			String password = request.getParameter("password");
			String rePassword = request.getParameter("rePassword");
			String siteName = request.getParameter("siteName");
			if(!password.equals(rePassword)){
				result.put("status", "0");
				result.put("msg", "两次密码输入不一致");
				return result.toString();
			}
			String orgid = UUID.randomUUID().toString();
			String newUser = "INSERT INTO zmj_user(id,loginaccount,loginpassword,orgid,"
					+ "create_time,modify_time) VALUES("
					+ "'" + UUID.randomUUID().toString() + "','"
					+ request.getParameter("userName") + "','"
					+ password + "','" + orgid + "',now(),now());";
			logger.info("newUsersql=[" + newUser + "]");
			String newSite = "INSERT INTO zmj_org(id,org_name,create_time,modify_time)  VALUES("
					+ "'" + orgid + "','" 
					+ siteName + "',now(),now());";
			logger.info("newUsersql=[" + newSite + "]");
			String[] sqls = new String[]{newUser,newSite};
			db.executeUpdate(sqls);
		}catch(Exception e){
			logger.error(e.getMessage(), e);
		}
		
		
		return "{\"status\":1}";
	}
	/**
	 * 校验用户名是否重复
	 * */
	private String checkName(HttpServletRequest request,
			DataBase db){
		String userName = request.getParameter("userName");
		//检查用户名是否重复
		String querySql = "SELECT count(*) AS count FROM zmj_user WHERE loginaccount=?";
		try{
			ResultSet rs = db.query(querySql, new String[] {userName});
			if(rs.next()&&(rs.getInt("COUNT")>=1)){
				return "{\"status\":0,\"msg\":\"用户名重复\"}";
			}
		}catch(Exception e){
			logger.error(e.getMessage(), e);
			return "error";		
		}
		return null;		
	}
}
