---
title: Intl Explained
description: Understanding and Utilizing Internationalization Features
category: ['i18n']
published: 2023-02-05 00:00
---

The Intl (Internationalization) API in JavaScript is a built-in API that provides internationalization and localization services for applications and was introduced in [ECMAScript Internationalization API Specification (ECMA-402)](https://402.ecma-international.org/9.0/). This API provides a set of internationalization services such as number formatting, and date and time formatting, that helps developers create applications that can adapt to different locales, allowing them to provide a more personalized experience for their users.

## Intl.NumberFormat

`Intl.NumberFormat` provides locale-sensitive number formatting, which can be particularly useful for applications that deal with monetary values or display data with large numbers.

##### Syntax

```javascript
Intl.NumberFormat(locale, options)
```

`Intl.NumberFormat` has several options that allow you to customize the number format, including:

- `locale`: The locale identifier, or an array of identifiers, that determines the formatting conventions to be used, such as the language and the region.

- `options`: An object with some or all of the following properties:

  - `style`: The formatting style to be used, such as "decimal", "percent", or "currency".

  - `currency`: The currency to be used when formatting a number as currency, such as "USD" or "EUR".

  - `currencyDisplay`: The way the currency symbol should be displayed, such as "symbol" (e.g., "$") or "code" (e.g., "USD").

  - `minimumFractionDigits` and `maximumFractionDigits`: The minimum and maximum number of fraction digits to be displayed.

`Intl.NumberFormat` is a built-in object that allows developers to format numbers in a locale-sensitive manner. This can be particularly useful for applications that deal with monetary values or display data with large numbers. Here's an example of how you can use `Intl.NumberFormat` to format a number into different units of currency:

```javascript
const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const eurFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})

const jpyFormatter = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
})

const number = 123456.789

console.log(usdFormatter.format(number))
// "$123,456.79"

console.log(eurFormatter.format(number))
// "123.456,79 €"

console.log(jpyFormatter.format(number))
// "￥123,457" (The Japanese yen doesn't use a minor unit)
```

In the example above, we create a new instance of `Intl.NumberFormat` with the locale 'en-US', and set the style to 'currency' and the currency to 'USD'. The format method is then used to format the number 123456.789 as a currency string.

## Intl.DateTimeFormat

`Intl.DateTimeFormat` is another built-in object that provides date and time formatting services. It allows developers to format dates and times in a manner that is appropriate for the user's locale, which can be particularly useful for applications that display dates and times in a user-facing manner.

##### Syntax

```javascript
Intl.DateTimeFormat(locale, options)
```

`Intl.DateTimeForm` shares a similar signature to that of it's number counterpart, and has several options that allow you to customize the date and time format, including:

- `calendar`: The calendar to be used, such as `gregory` or `chinese`.
- `dayPeriod`: The formatting style used for day periods like "in the morning", "am", "noon", "n" etc.
- `weekday`: The representation of the weekday. Possible values are `long` (e.g., Thursday), `short` (e.g., Thu), or `narrow` (e.g., T).

Each part of the time signature format, from the second to the era, can be customized.

Here's an example of how you can use `Intl.DateTimeFormat` to format a date:

```javascript
const date = new Date('2023-02-05')

const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

console.log(formatter.format(date)) // "February 5, 2023"
```

In the example above, we create a new instance of `Intl.DateTimeFormat` with the locale 'en-US', and set the year to be formatted as 'numeric', the month to be formatted as 'long', and the day to be formatted as 'numeric'. The format method is then used to format the date `new Date('2023-02-05'`) as a string.

The Intl object also contains tools to handle formatting lists, plural related formatting rules, and relative time formatting.

## Intl.ListFormat

In English, lists of items are usually separated by commas, and the last two items are separated by "and". In other languages, different rules may apply. `Intl.ListFormat` can handle these differences for you, so you don't have to hard-code the formatting rules for each locale.

To use `Intl.ListFormat`, you pass an array of items to the object's format method, along with the desired locale and any additional options, such as the type of separator to use. The method returns a string containing the formatted list. Here's an example:

```javascript
const items = ['apple', 'banana', 'cherry']

console.log(
  new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  }).format(items)
)
// "apple, banana, and cherry"

console.log(
  new Intl.ListFormat('en', {
    style: 'long',
    type: 'disjunction',
  }).format(items)
)
// "apple, banana, or cherry"

console.log(
  new Intl.ListFormat('en', {
    style: 'narrow',
  }).format(items)
)
// "apple, banana, cherry"
```

## Intl.PluralRules

`Intl.PluralRules` can be used to determine the correct plural form of a word based on the quantity being expressed, taking into account the locale and the plural rules of that locale.

For example, in English, the plural of "apple" is "apples" when referring to multiple apples, but in other languages the plural form may be different. `Intl.PluralRules` can handle these differences for you, so you don't have to hard-code the plural forms for each locale.

To use `Intl.PluralRules`, you pass a number to the object's select method, along with the desired locale and any additional options, such as the type of plural form you want. The method returns a string that represents the appropriate plural form for the given number and locale.

Here's an example"

```javascript
const count = 5

const formatter = new Intl.PluralRules('en', {
  type: 'cardinal',
})

console.log(formatter.select(count)) // "other"
```

Note that `Intl.PluralRules` only returns the plural category, such as "one", "other", "few", etc. It does not return the actual plural form of a word. To get the plural form, you would need to have a separate mapping of plural categories to plural forms, and use the result of `Intl.PluralRules.select()` to look up the appropriate form in that mapping:

```javascript
const pluralRules = new Intl.PluralRules('en-US', {
  type: 'ordinal',
})

const suffixes = new Map([
  ['one', 'st'],
  ['two', 'nd'],
  ['few', 'rd'],
  ['other', 'th'],
])

const formatOrdinals = (n) => {
  const rule = pluralRule.select(n)
  const suffix = suffixes.get(rule)
  return `${n}${suffix}`
}

formatOrdinals(0) // '0th'
formatOrdinals(1) // '1st'
formatOrdinals(2) // '2nd'
formatOrdinals(3) // '3rd'
formatOrdinals(4) // '4th'
formatOrdinals(21) // '21st'
formatOrdinals(42) // '42nd'
formatOrdinals(103) // '103rd'
```

## Conclusion

Intl in JavaScript provides developers with a powerful set of internationalization services that make it easier to create applications that can adapt to different locales. Whether you're formatting numbers or dates, Intl provides a flexible and easy-to-use API that allows you to format values in a locale-sensitive manner. So if you're looking to create an application that appeals to a global audience, be sure to take advantage of the Intl API in JavaScript!
