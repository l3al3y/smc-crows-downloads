# SMC Crows v2.0 · Stable Version

Community APK merge by **MiloSuam, APK merger/developer and fellow SMC player**. Original game assets: NetEase Games. Android connection patch: Super Mecha Crows. Pack-loading reference: SMC-Share developer.

The engine, game scripts and base packs retain the working r8 payloads. The v1.0 APK bundles the cumulative resource overlay: 114 battle-pass artwork replacements and 30 limited pilot texture aliases. This does not establish that every missing pilot/mecha skin or preview control has been fixed.

## Install and play

1. Keep 10–15 GB free before downloading and setup for a safer installation. Allow extra room if keeping downloaded ZIPs or rollback resources. The player reports 8.42 GB total installed SMC storage on their Samsung S26 Ultra with v1.0, down from 18.27 GB on the older build. Installed storage can vary by phone.
2. Export a private account backup outside `Android/data` before uninstalling or clearing game data. For a compatible community install, update over it using the same signing certificate. Do not uninstall merely to update.
3. Install the complete `SMC-Crows-v2.0-Stable.apk` from the website. Raw `.assembly-*.bin` files are hosting parts and cannot be installed.
4. Open setup. Matching installed extensions are reused; missing extensions download automatically over Wi-Fi. Use mobile data only after choosing that option. For offline setup, import all three matching `SMC-r8-extensions` ZIPs; their retained names identify the correct resource set for v1.0.
5. On a fresh install, use setup to start the original game once, then return and apply Crows. If the original verification server fails, follow the explicit continuation choice; a failed connection is not a completed original update.
6. Import your retained account if needed. Wait until setup is ready, then tap **Play SMC Crows**. Setup stays open for account management and never starts the game automatically.

Setup writes resources under `Android/data/com.netease.g93na/files/netease/smc/`. No Termux or manual copying is required. Unchanged reopening uses saved verification; changed or missing files, APK upgrades and manual repair may require full checks.

## Future resource updates

Ready setup checks the signed online channel in the background. When a compatible newer resource bundle is available, tap **Install resource update**. The check itself does not install anything or prevent playing an already verified game if the network is unavailable. A valid signed bundle must match this resource base. Compatible model/texture/artwork updates can use this path; engine, setup and APK changes still require an APK update. Older public r4 clients need a one-time compatible APK migration to obtain these features.

Keep account backup JSON private. App-owned account copies may disappear on uninstall or a full data wipe; recovery requires a surviving exported backup and a functioning server. Do not share that backup.

## Known limits and evidence

Some missing skins and the Lucky Draw/Chromatic Ball preview controls remain unresolved. This game is playable but still imperfect. MiloSuam merges available resources and does not create missing original assets. If you have a complete compatible resource set, contact **cabalme4@gmail.com**.

Historical gameplay screenshots belong to the earlier r8 APK and battle-pass v2 overlay. They are not proof of exact v1.0 gameplay. On the exact v1.0 installation, APK/resource hashes and account retention passed. After the requested lobby/battle-pass/match dash/jump comparison, the player reported “all good, no freeze.” This does not prove every skin, every phone or full-match duration. Final public-host checks are separate.

If a match freezes, close and reopen the game; the server may return you to the match if your character is still alive. This is a recovery suggestion, not a guaranteed fix for every freeze.

Use the Downloads page for the current server-verified availability of v2.0 and its matching extensions. The launch countdown has ended and has been removed.

## File identity

| File | Bytes | SHA-256 |
|---|---:|---|
| SMC-Crows-v2.0-Stable.apk | 4,237,843,753 | `6dd7be9a31ef384c494e7c2fd291d3fce69be966125066b5e81d92def7d74cc6` |
| SMC-resource-update-v3.zip | 45,128,218 | `60d2b51209e44da9039c8532a246b593d3ce8f354d7c58286e2788404624667d` |
| SMC-r8-extensions-1of3.zip | 1,251,668,090 | `0775d29f32a526bb69b5bb5d8615ee18bfd15776ecc6dce3f490dd3ade477717` |
| SMC-r8-extensions-2of3.zip | 1,404,952,194 | `6c905a5c3362d0b16a943ac3961e89f6a8420e9965397bec3dd4d6179fff0053` |
| SMC-r8-extensions-3of3.zip | 1,246,703,828 | `a1a410a977740629915be3a3d2b90145b16b868364d46acfe69259ed467cbff1` |

The bundled v3 update is already included in the APK. It is separately available for compatible signed-update import and recovery; it is not a replacement for the three extension ZIPs.

## Current video guides —13 October 2026

Three user-supplied videos now have separate short pages: [install and setup](https://irfanfahmi.com/smc/tutorials/setup/), [save/recover accounts in latest Setup](https://irfanfahmi.com/smc/tutorials/accounts/), and [advanced legacy recovery](https://irfanfahmi.com/smc/tutorials/old-backup/). Native controls, small players, full-screen and MP4 links. Current APK/resources/counters/quotas unchanged. The old-APK recovery tutorial now uses the exact original video without censorship, cuts, remuxing or re-encoding, as requested. Video maker: タクミ (Discord: takumi_sv). Local originals are preserved. Use built-in account export/import first; preserve a private external backup before uninstalling.

## Setup update — 12 October 2026

Install this same-signer APK once over the compatible existing game; export a private account backup first. Play remains manual and enabled after a failed optional Check for updates. Current account is retained; explicit import changes accounts. The redesigned Setup has translucent cards, seated community Riko, a locally generated “Are you ready to play?” greeting with guarded touch replay, and offline Privacy/Terms/Copyright notices. Synthetic voice and fan art are not official performer/gameplay evidence.

Compatible resources and supported layout/background patches can subsequently use signed Setup updates. This Java/code change requires an APK upgrade; Check alone does not install patches. Matching three r8 extension ZIPs and bundled cumulative v3 remain unchanged. Exact2080307 APK tested on Samsung S26 Ultra: MiloSuam reported greeting/login/lobby/battle pass/match all worked normally. Other phones and missing assets remain unverified.

## v2.0 release — 14 October 2026

Version2080310, Android10/API29 minimum, Android16/API36 target, ARM64; same package and signer. One-time APK upgrade required for SDK/Setup code; signed resource checks cannot replace APK code. Matching r8 extensions and cumulative v3 are intentionally unchanged. All original43native libraries/7gameDEX/20NPK are retained. V1/V2/V3 verified; external V4 sidecar verified for supporting installers. No native graphics/threading rebuild, native16KB guarantee or confirmed Firefox freeze fix. Exact2080310 phone/gameplay is pending; earlier2080308 user feedback is historical. Known defaultFirefox freezing, missing skins and preview controls remain. Private tester/verifier links are withdrawn.
