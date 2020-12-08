module.exports = class Customer {
    constructor(firstName, lastName, phoneNumber, street, streetNumber, postalCode, user) {
        this._firstName = firstName
        this._lastName = lastName
        this._phoneNumber = phoneNumber
        this._street = street
        this._streetNumber = streetNumber
        this._postalCode = postalCode
        this._user = user
    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get street() {
        return this._street;
    }

    set street(value) {
        this._street = value;
    }

    get streetNumber() {
        return this._streetNumber;
    }

    set streetNumber(value) {
        this._streetNumber = value;
    }

    get postalCode() {
        return this._postalCode;
    }

    set postalCode(value) {
        this._postalCode = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get customerSince() {
        return this._customerSince;
    }

    set customerSince(value) {
        this._customerSince = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}