Feature: Make attestations

    In order to gather gas for score queries
    As a person who cares about success in my objective
    I want to provide attestations about rated I have already been in contact with

Background: Current data
Given We are the 2022-08-10T13:00+00Z

Scenario: Create a first attestation
Given I have a Cosmos portfolio
When I give a rating of 4 to the rated with email theguy@company.com
Then The attestation is created
And My account is debited with 100 gas tokens

Scenario: Modify a recently created attestation
Given attestations I created
| Id    | Identifier type   | Identifier            | Rating    | Time created          |
| 1     | 1                 | theguy@company.com    | 4         | 2022-08-01T13:00+00Z  |
| 5     | 1                 | antherguy@company.com | 2         | 2022-08-08T13:00+00Z  |
And my portfolio has 100 gas in it
And the attestation correction period is 7 days
When I modify attestation 5, setting the identifier to anotherguy@company.com, and rating to 3
Then the attestation is modified accordingly
And my portfolio has 100 gas in it

Scenario: Modify an old attestation
Given attestations I created
| Id    | Identifier type   | Identifier            | Rating    | Time created          |
| 1     | 1                 | theguy@company.com    | 4         | 2022-08-01T13:00+00Z  |
| 5     | 1                 | antherguy@company.com | 2         | 2022-07-01T13:00+00Z  |
And my portfolio has 100 gas in it
And the attestation correction period is 7 days
When I modify attestation 5, setting the identifier to anotherguy@company.com, and rating to 3
Then the attestation is modified accordingly
And my portfolio has 200 gas in it

Scenario: Modify again a recently modified attestation
Given attestations I created
| Id    | Identifier type   | Identifier            | Rating    | Time created          |
| 1     | 1                 | theguy@company.com    | 4         | 2022-08-01T13:00+00Z  |
| 5     | 1                 | antherguy@company.com | 2         | 2022-07-01T13:00+00Z  |
And at 2022-08-08T13:00:00, I modified attestation 5, setting the identifier to anotherguy@company.com, and rating to 3 
And my portfolio has 100 gas in it
And the attestation correction period is 7 days
When I modify attestation 5, setting rating to 2
Then the attestation is modified accordingly
And my portfolio has 100 gas in it