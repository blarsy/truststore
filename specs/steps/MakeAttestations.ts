import assert from "assert"

import { Given, When, Then } from "@cucumber/cucumber"

Given('we are the {}', (isoDate: string) => {
    return 'pending'
})
Given('I have a Cosmos portfolio', () => {
    return 'pending'
})

When('I give a rating of {int} to the rated with email {}', (rating: number, email: string) => {
    return 'pending'
})

Then('my account is debited with {int} gas tokens', (gasTokenDebited: number) => {
    return 'pending'
})

Given('attestations I created', datatable => {
    return 'pending'
})

Given("my portfolio has {int} gas in it", (gasInPortfolio: number) => {
    return 'pending'
})

Then('the attestation is created', () => {
    return 'pending'
})

Given('the attestation correction period is {int} days', (correctionPeriodInDays: number) => {
    return 'pending'
})

When('I modify attestation {int}, setting the identifier to {string}, and rating to {int}', (attestationId: number, email: string, rating: number) => {
    return 'pending'
})

Then('the attestation is modified accordingly',  () => {
    return 'pending'
})

When('I modify attestation {int}, setting rating to {int}', (attestationId: number, rating: number) => {
    return 'pending'
})

Given('at {}, I modified attestation {int}, setting the identifier to {}, and rating to {int}', (isoDate: string, attestationId: number, email: string, rating: number) => {
    return 'pending'
})

When('I modify attestation {int}, setting the identifier to {}, and rating to {int}', (attestationId: number, email: string, rating: number) => {
    return 'pending'
})