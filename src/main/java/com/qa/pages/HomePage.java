package com.qa.pages;

import java.io.FileNotFoundException;

import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class HomePage extends TestBase {

public HomePage() throws FileNotFoundException {
		
		PageFactory.initElements(driver, this);
	}
	

public String validateHomePageTitle() {
	return driver.getTitle();
	
}
	
}
