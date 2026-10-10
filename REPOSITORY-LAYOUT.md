# SMC repository ownership

Maintained by **MiloSuam, APK merger/developer and fellow SMC player**. Original game: NetEase Games. Revival connection kit: Super Mecha Crows.

All maintained SMC project work belongs to these two repositories:

| Material | Canonical repository |
| --- | --- |
| Download website, player guides, approved APK release records, resource ZIPs/manifests/checksums, public gameplay evidence | https://github.com/l3al3y/smc-crows-downloads |
| Setup/patch source, tests, build/extraction/audit tools, reviewed development records, workflow skills, preserved source archives | https://github.com/l3al3y/smc-crows-source (private) |

The Portfolio repository is a navigation entry only. Do not add SMC source, build records, resource dumps, APKs, screenshots or new SMC releases there.

Current public release is r4, APK SHA-256 `1d42be2fc7992a3fb4c93254890ef9f392fe69776811cf20eeefa9a589db80d3`, 2,539,852,614 bytes. The download page at https://irfanfahmi.com/smc/ serves an immutable public repo commit (reported in its X-SMC-Site-Commit response header) through the existing Cloudflare worker. Its runtime bindings/counter are deployed service data, not repository files. New static commits do not automatically change the pinned live website.

The canonical full unchanged APK is served at https://irfanfahmi.com/smc/api/apk-file/SMC-Crows-r4.apk through a guarded Cloudflare Worker and private R2 bucket. It exceeds GitHub’s per-release-file limit of 2 GiB. Do not replace the one-file phone installation with unapproved split-APK instructions merely to move hosting. https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases

The current resources are the three SHA-pinned ZIPs in the download repo's `smc-android-20261008-r2` release. Some older installed APKs embed Portfolio release URLs. Those Portfolio copies remain compatibility mirrors, not active development locations. They share the same resource digests; do not delete or rename them until a tested migration is authorized. The old WITHDRAWN mirrors remain historical backups, not a release to promote.

Original APK/XAPK/resource inputs and proven outputs remain locally preserved. API keys, signing keys, account files, raw phone logs/traces and unfiltered original Git history remain local and must never be committed, even to the private source repo. Private source archives must not be uploaded to the public download repo.

The 9 October 2026 repository work changes records/ownership rules only; no APK payload, player resource, live worker, counter or gameplay behavior changed. Rebuild/testing alone does not authorize a replacement release. Future publication requires the user's explicit instruction.

## APK host refresh — 10 October 2026 (historical Drive stage)

The unchanged r4 APK previously used https://drive.google.com/file/d/1BDxloM0nYejgW01wrjY9uM9ZM2WzVzdT/view and the prepared shortcut folder https://drive.google.com/drive/folders/1rSfsgBBjxJNyM6C8x75Y7kf93jDxfW95. The user chose to publish those links after being informed of quota/Chrome download-check failures. That hosting stage is superseded by the guarded Cloudflare host below. APK/resource identities and counter key are unchanged. Reviewed hosting records belong in private smc-crows-source.

## Guarded Cloudflare APK hosting — 10 October 2026

The approved hosting migration preserves the exact r4 APK and all resource URLs. Bucket public access must remain disabled; r2.dev or direct bucket custom domains would bypass application quotas. Worker/schema/tests/reviewed deployment records belong in private smc-crows-source. Public site/player docs belong here. Native rate limiter bounds per-visitor request bursts; atomic D1 daily/monthly reservations independently bound storage reads. Workers remains Free. Do not claim account-wide hard spending limits or lifetime-free hosting.

