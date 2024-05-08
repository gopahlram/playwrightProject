
@profile_submission
Feature: Apply Career functionality
    Scenario Outline: Verify error message for submitting job without mandatory fields.
        Given A user click search jobs in Career section.
        And Navigate to job listing page.
        When Upload user profile "<user_profile>" in job listing page.
        And Search for the "<job>" Job and check requirement id "<id>".
        And Apply for the Selected Job.
        Then Submit the application without mandatory fields and check error message "<error_message>".
    Examples:
        |user_profile||job||id||error_message|
        |sample_profile.pdf||Test Automation||ID: R2412287||Please fill all required fields (marked with *)|