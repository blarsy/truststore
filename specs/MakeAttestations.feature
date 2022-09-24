Feature: Make attestations

    In order to gather gas for score queries
    As a person who cares about success in my objective
    I want to provide attestations about rated I have already been in contact with

Background: Current data
Given I have a Cosmos portfolio with 100 gas
And the attestation correction period 100000 blocks

Scenario: Create a first attestation
When I give a rating of 4 to the rated with email theguy@company.com
Then the attestation is created
And my account is debited by some gas tokens

Scenario: Fail to create a duplicate attestation
Given attestations I created
| Identifier type   | Identifier            | Rating    |
| 1                 | theguy2@company.com   | 4         |
When I give a rating of 3 to the rated with email theguy2@company.com
Then the operation fails because of an attempt to duplicate an attestation

Scenario: Modify a recently created attestation
Given attestations I created
| Identifier type   | Identifier         | Rating    | Updated # blocks ago  |
| 1                 | theguy3@company.com| 2         | 1000                  |
When I modify the attestation, setting the identifier to anotherguy@company.com, and rating to 3
Then the attestation is modified accordingly
And my portfolio has 100 gas in it

Scenario: Modify an old attestation
Given attestations I created
| Identifier type   | Identifier            | Rating    | Updated # blocks ago  |
| 1                 | theguy4@company.com   | 4         | 200000                |
When I modify the attestation, setting the identifier to anotherguy1@company.com, and rating to 3
Then the attestation is modified accordingly
And my portfolio has 200 gas in it

Scenario: Fail to modify a recently created attestation by making it into a duplicate of an existing attestation
Given attestations I created
| Identifier type   | Identifier            | Rating    | Updated # blocks ago  |
| 1                 | theguy5@company.com   | 4         | 1000                  |
| 1                 | antherguy3@company.com| 2         | 2000                  |
When I modify the first attestation, setting the identifier to anotherguy3@company.com, and rating to 2
Then the operation fails because of an attempt to duplicate an attestation
And my portfolio has 100 gas in it