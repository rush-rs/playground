# rush Playground

A web-editor and runtime for showcasing and testing rush.

## What Is The Playground?

The rush playground enables everyone to use rush without the need for any sort
of installation. On the playground, users can develop their own
[rush](https://github.com/rush-rs/rush) programs.

The playground contains a web-editor which is powered by
[Codemirror](https://github.com/codemirror).

Features of the web-editor include:

- Complete syntax highlighting
- Linting and diagnostics whilst typing
- Viewing the compilation output of rush programs
- Executing rush programs using the interpreters

## Privacy

Aside from the initial page load, the playground does not communicate with a
server. Therefore, linting, compiling, and running rush only uses Rust crates
which were compiled to _WebAssembly_.

## Screenshot

![Screenshot of the playground](./screenshot.png)
