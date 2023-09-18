# SOLID demonstration using TypeScript

In the SILOD ("siloed") order:

1. Start
2. SRP
3. ISP (look at email service + interface in `base.ts`)
4. LSP
5. OCP
6. DIP

Also, consider seeing these other resources:

## Five Minutes or Less

- [5 Minutes or Less: SOLID](https://github.com/mikaelvesavuori/5-minutes-or-less-solid)

## The SOLID Principles

The principles in their mnemonic order:

- [Single Responsibility Principle](src/single-responsibility-principle.ts)
- [Open-Closed Principle](src/open-closed-principle.ts)
- [Liskov Substitution Principle](src/liskov-substitution-principle.ts)
- [Interface Segregation Principle](src/interface-segregation-principle.ts)
- [Dependency Inversion Principle](src/dependency-inversion-principle.ts)

## Running the code

You can install the things with `npm install` and then just go at each file with `npx ts-node src/{filename}.ts`.

Or, if you're lazy, you can also copy the individual TS file's contents into the [TypeScript playground](https://www.typescriptlang.org/play) if you want to avoid cloning and installing anything at all.
