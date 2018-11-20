package com.qa.pages;

import java.io.FileNotFoundException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase{

	
	@FindBy(name = "email")
	WebElement username;

	@FindBy(name = "pass")
	WebElement password;
	
	@FindBy(xpath = "//input[@value= 'Log In']")
	WebElement signinbtn;
	
	public LoginPage() throws FileNotFoundException {
		
		PageFactory.initElements(driver, this);
	}
	
	
	
	
	public HomePage login(String un, String pwd) throws FileNotFoundException {
		username.sendKeys(un);
		password.sendKeys(pwd);
		signinbtn.click();
		return new HomePage();
	}
	
}