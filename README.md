# SCREEPYOS 0.9.2

Experimental Windows gaming-PC playbook.

[Website](https://egemen123boytje-tech.github.io/SCREEPYOS/)

- [Download playbook](downloads/SCREEPYOS-0.9.2-Gaming-PC-Experimental.apbx)
- [Source code and tests](downloads/SCREEPYOS-0.9.2-Source.zip)
- [Usage and recovery](docs/0.9.2/README.txt)
- [Validation](docs/0.9.2/VALIDATION.txt)

Fixes Finish halting when a service has an enabled dependent (for example Windows Search with Work Folders). The service remains unchanged, a warning is logged, and other selections continue. Real backup/write failures still fail. Edge removal remains optional and subject to Windows restrictions.

Build 26300 support retained. Upgrades from 0.9.0 and 0.9.1 supported. Existing backups retained. Mock regression checks passed; a full rerun on the affected PC is not yet verified. No guaranteed FPS gains.

Playbook SHA-256: `17b33922aec9dfd3cd747b0bcb57bd395e73426d19380a3ad16cfa3fdef0c2c2`
