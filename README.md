# SOLID demonstration using TypeScript

This repo demonstrates the SOLID principles with the example of a basic imaginary email service, in which we need to validate the address, send a message, and log the transaction. We'll start with a basic "dirty implementation" and introduce the SOLID concepts one by one.

In the SILOD ("siloed") order:

0. Start
1. `SRP`: Begin to break up functionality and make it semantic and clean.
2. `ISP`: Working towards interfaces, not concretions.
3. `LSP`: Making subclasses without breaking superclasses.
4. `OCP`: Extending behavior of superclass methods without breaking them.
5. `DIP`: Creating flexibility by decoupling dependencies and injecting them where needed.

## Running the code

You can install the things with `npm install`. For running the starting code, run `npm start`. Then, for each respective letter of the SOLID principles you want to run, use `npm run s|o|l|i|d`.

Or, if you're lazy, you can also copy the individual TS file's contents into the [TypeScript playground](https://www.typescriptlang.org/play) if you want to avoid cloning and installing anything at all.

---

## More resources

### The SOLID Principles

The principles in their mnemonic order:

- [Single Responsibility Principle](src/single-responsibility-principle.ts)
- [Open-Closed Principle](src/open-closed-principle.ts)
- [Liskov Substitution Principle](src/liskov-substitution-principle.ts)
- [Interface Segregation Principle](src/interface-segregation-principle.ts)
- [Dependency Inversion Principle](src/dependency-inversion-principle.ts)

### Five Minutes or Less

- [5 Minutes or Less: SOLID](https://github.com/mikaelvesavuori/5-minutes-or-less-solid)
