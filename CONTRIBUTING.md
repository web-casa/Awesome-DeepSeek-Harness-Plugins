# Contributing

## Submit a plugin

This repository is a generated publication of the verified Cordis plugin index. Do not add a plugin by editing `data/plugins.json`, `README.md`, or `README.zh.md` directly; those files are replaced by the next index export.

Submit the plugin through [cordis.run/submit](https://cordis.run/submit). Before submission, make sure that:

- the repository and referenced installation source are publicly accessible;
- the package has a clear license and a stable version;
- `package.json` declares `dsh.bundle.patch`, and the referenced patch file exists;
- the documented one-line `dsh plugin --profile <name> add ...` command installs the submitted package;
- bundled binaries or generated/obfuscated files have reviewable provenance and security evidence;
- security status is supplied by the Cordis verification process, not asserted manually.

After verification and approval, maintainers export the canonical index and regenerate both README files.

## Change this repository

Pull requests for the generator, validation, workflows, and documentation are welcome. Run these checks before opening a pull request:

```sh
node scripts/validate.mjs
node scripts/generate.mjs
git diff --exit-code -- README.md README.zh.md
```

If the generator changes, keep the corresponding generator in the Cordis application repository synchronized.
