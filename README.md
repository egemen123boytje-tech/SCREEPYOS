# SCREEPYOS 0.9.4

Experimental Windows gaming-PC playbook.

[Website](https://egemen123boytje-tech.github.io/SCREEPYOS/)

- [Download playbook](downloads/SCREEPYOS-0.9.4-Gaming-PC-Experimental.apbx)
- [Source code and tests](downloads/SCREEPYOS-0.9.4-Source.zip)
- [Usage and recovery](docs/0.9.4/README.txt)
- [Validation](docs/0.9.4/VALIDATION.txt)

Adds an optional Advanced Edge removal checkbox (off by default). After normal removal, this tries the legacy placeholder technique and Microsoft's verified installer with --force-uninstall. Existing legacy files are preserved. WebView2 is not targeted; --delete-profile is not used. A replacement browser must already be verified. The placeholder remains with a creation record. Windows can still block removal or reinstall Edge.

Technique reference: [ChrisTitusTech/winutil](https://github.com/ChrisTitusTech/winutil/blob/main/config/tweaks.json). Independently implemented with additional checks.

Prior visual effects, build 26300 and service dependency fixes retained. Full installation/uninstall on the affected PC remains unverified; isolated tests passed. No guaranteed FPS gains.

Playbook SHA-256: `da340772903afc686863435ec199de1c3c2eac6d76d5d833bbcb8ed101171d0d`
