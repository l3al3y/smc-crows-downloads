# SMC Crows Android r4

**MiloSuam, APK merger/developer and fellow SMC player**
“I want all players to be able to play this nostalgic game again.”
Original game: NetEase Games. Community revival connection kit: Super Mecha Crows.

## Install and play

1. Install `SMC-Crows.apk`. Keep the existing community app installed when updating: the signing certificate is unchanged, and account files are preserved.
2. First setup downloads and verifies the three matching Android resource ZIPs, extracts all 22 NPKs, and preserves the original-first-start then Crows patch sequence. Wi-Fi, pause/retry and offline ZIP import remain supported. No Termux or manual Android folder copying is needed.
3. After full setup, reopening checks the saved resource state and automatically opens the game. Full hashing/extraction runs only when needed for setup, an APK update, changed/missing resources or manual repair. Use “Stay in setup / verify and repair resources” for a full check.

Destination: `Android/data/com.netease.g93na/files/netease/smc/`. Native paths: `res_patch/<unsigned hash % 1023>/<unsigned hash>`. Account files stay separate.

## Matching downloads

APK download: https://drive.google.com/file/d/1wNCScK6BptW6FiQGngItznr7pG9rnqXK/view

APK: 2,539,852,614 bytes. SHA-256: `1d42be2fc7992a3fb4c93254890ef9f392fe69776811cf20eeefa9a589db80d3`.

Resources are unchanged from r2 and now hosted in the dedicated public download repository:
https://github.com/l3al3y/smc-crows-downloads/releases/tag/smc-android-20261008-r2

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `SMC-resources-1of3.zip` | 1,803,718,578 | `4e17124223155fbe16a72f430060511977349ee1a63e90c71cddfa2f5695ea53` |
| `SMC-resources-2of3.zip` | 1,799,284,140 | `a000b1b0a5cd2413c58776898ddc71fa7f6affa672a58e320da063e5bdd069cb` |
| `SMC-resources-3of3.zip` | 1,957,663,734 | `cf2291748b7fa70dc8d494b2aadd63202996614e826f641a333c4ddb2753458e` |

About 5.56 GB downloaded resources and 9.62 GB decoded resources, plus APK installation and temporary staging space. Setup calculates remaining space from actual verified/partial files. The APK is not a single file containing the entire external resource bundle.

## Verified behavior and phone evidence

All 1,874 non-setup APK payload hashes, native engine, scripts, resources and manifest remain unchanged from published r2. Only setup `classes8.dex` changed. The six setup/import/download/receipt/patch integrity host suites, complete ZIP CRC, signature certificate and alignment checks passed.

The preceding r3 setup candidate automatically reopened on Samsung S26 Ultra / Android 16 in 6.344 seconds. The player reported no further freeze after the graphics comparison and tested 30/45/60/90/120 FPS. The session started with Energy Saving/Low resolution/Low mecha effects; graphics were subsequently adjusted by the player. This is observed phone behavior, not an identified native engine fix. r4 adds only the verified resource-host URL change to that setup code. The exact r4 APK was installed, completed its full update verification, reached login and the textured lobby, and reopened the game in 6.312 seconds without repeating the full scan. The 6.312-second measure ends when the game activity opens; it is not the total login time.

If a dash freeze occurs on your device, the successful diagnostic profile used Energy Saving, Low resolution, Low mecha effects, AA off, shadows off and HDR off. FPS was subsequently player-tested at all five selectable rates; the release does not force a 30 FPS cap or change global GPU settings. Other devices, complete-match stability, every pilot/skin and battle-pass screen are not established by this single phone session.

Ordinary reopen uses complete pinned file size/time/inventory/build checks plus actual patch verification. Deliberately same-size corruption with preserved timestamps requires the manual full SHA verification. Successful install/update/repair still hashes every pinned resource.

## Source, evidence and APK count

Website: https://irfanfahmi.com/smc/
Public downloads: https://github.com/l3al3y/smc-crows-downloads
Private development source: https://github.com/l3al3y/smc-crows-source

Screenshots are tied to their recorded APK hashes; older-build pictures remain labeled. APK count measures button requests, not completed downloads or unique players. Existing counts and original artifacts are preserved. Raw phone logs/accounts/signing credentials are excluded from distribution.
