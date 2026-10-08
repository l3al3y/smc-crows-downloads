# Super Mecha Champions — Crows Android

Prepared for **MiloSuam, APK merger/developer and fellow SMC player**.

“I want all players to be able to play this nostalgic game again.”

This bundle contains the rebuilt `SMC-Crows.apk`, its three matching resource ZIPs, checksums and verification records; source is maintained privately. Game: NetEase Games. Community revival connection kit: Super Mecha Crows. Preserve those credits when distributing.

## Player setup

1. Install `SMC-Crows.apk` and open it. The app downloads the three matching resource packs over Wi-Fi; mobile data requires selecting its button. A downloaded matching ZIP can also be imported through the file picker.
2. Setup verifies the resource files and extracts all 22 Android NPKs into the native resource store. It checks the installed textures, maps and skin resources before continuing. Keep the phone awake during setup; pause and retry are supported.
3. Run the original game once, wait for its login screen and close it. Return to setup and confirm the first-start attempt to apply Crows. If the old resource-verification server is unavailable, the setup explains the explicit continuation option; an early unexplained crash is not successful initialization.
4. The app verifies the Crows script patch, certificate, startup flags and account before enabling Play. Keep account backups. No Termux, PC patch installer, ADB or manual directory copy is needed for this app flow.

The destination is Android's app-owned directory, normally `Android/data/com.netease.g93na/files/netease/smc/`. Decoded files use `res_patch/<unsigned hash % 1023>/<unsigned decimal hash>`. Different old bytes at pinned resource paths are retained under `Documents/crows_integrity_backup/` before replacement. Account files remain separate.

## Matching files

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `SMC-Crows.apk` | 2,539,848,518 | `b2cb6a128f88d7e0c9e6c37097af2ed63fb5fc7b6daaae7c3b3c80ca7b0c3229` |
| `resources/SMC-resources-1of3.zip` | 1,803,718,578 | `4e17124223155fbe16a72f430060511977349ee1a63e90c71cddfa2f5695ea53` |
| `resources/SMC-resources-2of3.zip` | 1,799,284,140 | `a000b1b0a5cd2413c58776898ddc71fa7f6affa672a58e320da063e5bdd069cb` |
| `resources/SMC-resources-3of3.zip` | 1,957,663,734 | `cf2291748b7fa70dc8d494b2aadd63202996614e826f641a333c4ddb2753458e` |

Resource download: about 5.56 GB. Installed source resources: 5,560,659,512 bytes. Decoded native store: 9,621,067,461 bytes / 119,076 files, plus 29 recovered Android resources / 2,441,563 bytes. APK installation and temporary download/import staging need additional storage; setup calculates the remaining space from existing verified files and partial downloads. The APK does not contain the full 5.56 GB external bundle itself.

## What changed and what passed

The exact preserved gameplay-reference APK was used as the base. Only `classes8.dex` and `assets/crows/store.tsv` changed among existing payloads. The complete Android inventory and 29 recovered native Android files are used; no Steam DLLs, PC scripts, PC texture conversions or experimental texture layer are included.

Checks passed: source reproduces the baseline setup DEX exactly before changes; all 119,076 Java-decoded hashes match the independent Android inventory; all 30 resource-container files occur exactly once across the three ZIPs; all 29 recovered payloads are checked; all 1,842 retained APK payload hashes match the reference. APK signatures v1/v2/v3, the existing signing certificate, 4/16 KB ZIP alignment, all ZIP CRCs and duplicate ZIP/DEX checks passed.

Host tests cover ordered patching, independent account generation and preservation, first-start migration/recovery, corrupt/unknown/incomplete resource imports, interrupted multi-pack downloads, correct ranges and servers ignoring ranges, quota/HTML rejection, corrupt downloads, pause/retry, staging checks, false markers, same-size installed corruption, preserved old resource backups, installed patch/certificate/config/flag failures, and storage accounting for fresh/retry/offline setup.

## Publication and actual gameplay status

Published release: https://irfanfahmi.com/smc/. The matching resource routes use release tag `smc-android-20261008-r2`. The APK download button records APK download requests; it does not measure completed transfers, installations or unique players. Previous counts and releases are preserved.

**The exact published APK reached gameplay on Samsung S26 Ultra / Android 16; a persistent dash freeze was reproduced and remains under investigation.** Full-match stability, affected pilot/skin screens, battle-pass layout and performance are not established by archive checks. This build adds strict resource installation checks; it does not prove the cause of the earlier reported crash or a battle-pass UI fix. Historical screenshots are separately labeled with the older APK hash and must not be advertised as evidence for this rebuild. After authorization to publish, verify anonymous GET, redirects, Range behavior and actual size/SHA-256 for every APK/resource link before enabling the public buttons.

Detailed records: `APK-verification.json`, `source-and-host-verification.json`, `resource-bundle-verification.json`, `SMC-resource-manifest.json`, and `retained-game-payloads.json`. Source archive is preserved in the private development repository. Local source workspace: `work/public-release-20261008-r2/`. Original APKs, XAPKs and resource archives remain preserved.
