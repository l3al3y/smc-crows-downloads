# SMC Crows v1.0

Community APK merge by **MiloSuam, APK merger/developer and fellow SMC player**. Original game assets: NetEase Games. Android connection patch: Super Mecha Crows. Pack-loading reference: SMC-Share developer.

The engine, game scripts and base packs retain the working r8 payloads. The v1.0 APK bundles the cumulative resource overlay: 114 battle-pass artwork replacements and 30 limited pilot texture aliases. This does not establish that every missing pilot/mecha skin or preview control has been fixed.

## Install and play

1. Keep 20–26 GB free before setup, depending on the phone. Allow extra room if retaining earlier resources for rollback. The previously reported 18.27 GB installed total belongs to an older build; the v1.0 installed total has not been measured on every device.
2. Export a private account backup outside `Android/data` before uninstalling or clearing game data. For a compatible community install, update over it using the same signing certificate. Do not uninstall merely to update.
3. Install the complete `SMC-Crows-v1.0.apk` from the website. Raw `.assembly-*.bin` files are hosting parts and cannot be installed.
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

Website downloads open no earlier than **11 October 2026, 7:00 AM Malaysia time**, after final checks. The five-hour countdown runs from 2:00–7:00 AM. If checks fail, downloads remain locked.

## File identity

| File | Bytes | SHA-256 |
|---|---:|---|
| SMC-Crows-v1.0.apk | 4,234,206,049 | `7ba44195c7247b132359ec7023f7578b24fa273c65b182600cf053c106f72ba7` |
| SMC-resource-update-v3.zip | 45,128,218 | `60d2b51209e44da9039c8532a246b593d3ce8f354d7c58286e2788404624667d` |
| SMC-r8-extensions-1of3.zip | 1,251,668,090 | `0775d29f32a526bb69b5bb5d8615ee18bfd15776ecc6dce3f490dd3ade477717` |
| SMC-r8-extensions-2of3.zip | 1,404,952,194 | `6c905a5c3362d0b16a943ac3961e89f6a8420e9965397bec3dd4d6179fff0053` |
| SMC-r8-extensions-3of3.zip | 1,246,703,828 | `a1a410a977740629915be3a3d2b90145b16b868364d46acfe69259ed467cbff1` |

The bundled v3 update is already included in the APK. It is separately available for compatible signed-update import and recovery; it is not a replacement for the three extension ZIPs.
