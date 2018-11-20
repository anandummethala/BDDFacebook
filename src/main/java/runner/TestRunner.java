package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\eicj8za\\eclipse-workspace\\BDDFacebook\\src\\main\\java\\Feature\\login.feature" //path of the feature files
		,glue={"stepDefinitions"} //path of the step definition files
		,format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"} //to generate different types of reporting
		,strict = true //it will check if any step is not defined in step definition file
	    ,monochrome = true //display the console output in a proper readable format
		,dryRun = false //to check the mapping proper between feature file and step definition file
		)



public class TestRunner {

	
	
}
