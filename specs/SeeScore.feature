Feature: See score

    In order to assess the integrity of a rated, of which I have a contact information
    As a person who cares about success in my objective
    I want to see a general integrity score of the rated

Scenario Outline: See the integrity score as an average of attestations
Given attestations <1>, <2>, <3>, <4>, <5>, <6>, <7>, <8>, <9>, <10>
And the minimum number of attestations to make scoring relevant is 5
When I query the system with the email contact info theguy@company.com

Examples:
    | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Score                          |
    | 4 | 4 | 4 | 3 |   |   |   |   |   |    | insufficient amount of ratings |
    | 4 | 4 | 4 | 3 | 2 | 4 |   |   |   |    | 3.5                            |