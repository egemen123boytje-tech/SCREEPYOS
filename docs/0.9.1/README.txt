SCREEPYOS 0.9.1 - 6 October 2026
Fix: Windows 11 26H2 build 26300 was missing from the AME requirement,
installer and visual-profile checks. All three now allow build 26300.
Upgrades from 0.9.0 are allowed. Other unknown builds remain blocked.
Build 26300 compatibility is experimental: no full installation on 26H2,
real game benchmark or FPS gain has been verified.
Reference: https://learn.microsoft.com/windows/whats-new/whats-new-windows-11-version-26h2

SCREEPYOS 0.9.1 - Performance Lab (Experimental)
Updated 4 October 2026. Black/gray UI and original logo retained.

NEW IN 0.9.1
- Per-game background window selections, reviewed before each session starts.
- Low / Mid / High / Custom slots for your own saved game configuration files.
- Configuration experiments with verified backups, Restore and Keep actions.
- Reflex / Anti-Lag guidance and official links, with manual in-game choices.
- Timed CPU/RAM recording plus optional GPU engine counters and sensor readings.
- Optional PresentMon console integration for compatible frame-time CSV recording.
- Benchmark experiment notes and direct navigation to config recovery.
- No GPU-selection feature. Low/mid/high are user-defined slots, not automatic
  hardware detection, universally optimized graphics presets or FPS guarantees.

QUICK START: PERFORMANCE LAB
1. Add the actual game executable in Game library; save its profile.
2. Open Performance Lab, refresh games and select yours.
3. Background apps: refresh open windows, check only those you want to close,
   and save. Starting Game library asks before sending normal window-close
   requests. Save prompts are respected. Launchers, Windows processes and the
   game are excluded. No force-kill or automatic reopening is performed.
   Saving the list replaces that game's saved choices with the checked paths.
4. Game settings: adjust graphics INSIDE YOUR GAME, exit, select its existing
   text settings file, then save it in Low/Mid/High/Custom. Suggestions are
   starting points only. Each slot stores one complete user-selected text file
   (ini/cfg/json/xml/txt, max 5 MB); there are no game-specific format adapters.
   Do not select saved games, accounts or executable scripts. Cloud sync may
   overwrite settings: pause it yourself if necessary for a controlled test.
5. Apply a snapshot to begin an experiment. The target path is shown before
   applying, the current file is saved, and bytes/encoding are preserved.
   Run your benchmark, close the game, then Restore or Keep. If the game changed
   the file, automatic restore stops. You can explicitly review the conflict and
   restore anyway; the displaced file is backed up first. A changed file hash
   invalidates that confirmation. Completed experiment backups remain on disk.
6. Latency guide: use the official vendor instructions and in-game supported
   settings. The app does not force driver flags, modify GPU choice or change
   security settings. Compare one option at a time.

MEASUREMENTS
Start the game first. Select 15-600 seconds in Performance Lab > Measurements.
CPU/RAM logging is built in and runs in a separate worker. The latest sample is
shown while recording; telemetry.csv stores the data. CPU is normalized across
ALL logical cores, not the busiest core. RAM is the process working set.
GPU sampling is optional and reports the busiest counter engine for the game's
PID, NOT overall GPU utilization or a definitive bottleneck diagnosis.
Temperatures are optional: an existing LibreHardwareMonitor WMI provider is
required. Sensor identifiers/values are recorded as-is; missing data stays blank.
No monitoring driver or sensor package is installed by SCREEPYOS.

FRAME-TIME CAPTURE
Use the official PresentMon releases link in the app, download the console EXE,
then select it. PresentMon is not bundled, downloaded or started automatically.
You confirm the executable before capture. The integration uses documented
--v1_metrics, --process_id, timed capture and a unique tracing session name.
Permission/driver/version failures are logged in the capture folder. SCREEPYOS
does not silently elevate or change tracing permissions. No input-event tracking.
An inaccessible or ambiguous game process blocks capture. Captures end after
the chosen duration or target exit. Closing SCREEPYOS stops its telemetry worker;
an already-started PresentMon timed capture may finish in the background.
Import frames.csv into Benchmarks. Each CSV must contain a single process and
swap chain. Only an initial zero-duration frame is excluded; other invalid data
is rejected. At least 100 valid frames are required, preferably several thousand.
Recording itself has overhead: use identical options for BEFORE and AFTER runs.
GPU sensors, anti-cheat games and external PresentMon integration were NOT tested
on real gaming hardware in this release. Do not treat sample counts as FPS proof.

COMPARISON AND ROLLBACK
Record the game, scene, settings and single change in the benchmark notes field.
Import at least 3 comparable BEFORE/AFTER runs. Compare median FPS, run range,
1% lows and P99, then export the report. The Performance Lab recovery link lets
you choose the relevant game's configuration experiment to restore or keep.
Power/priority/capture Windows settings still use Game library session recovery;
other Windows tweaks use their existing restore controls. Config rollback does
not roll back other unrelated tweaks. No automatic statistical significance or
"best settings" claim is made. Benchmark comparisons are not persisted unless
exported, while configuration snapshots and background preferences are saved.

DATA AND UPGRADES
Data is stored locally under LOCALAPPDATA/SCREEPYOS:
PerformanceProfiles/<game-id> contains choices, snapshots and recovery journals.
Captures/<date-id> contains telemetry, frame-time CSVs and diagnostic logs.
No telemetry upload is implemented. Review paths and game names before sharing.
Upgrade from 0.8.0 is supported in addition to earlier listed releases. Recover
pending Game library sessions and finish config experiments, then close all
SCREEPYOS windows before installing. Recreate game desktop shortcuts for 0.9.1.
Full AME installation and real hardware FPS gains remain unverified.

Official references:
https://github.com/GameTechDev/PresentMon/blob/main/README-ConsoleApplication.md
https://github.com/LibreHardwareMonitor/LibreHardwareMonitor
https://www.nvidia.com/en-us/geforce/technologies/reflex/
https://www.amd.com/en/products/software/adrenalin/radeon-software-anti-lag.html

INSTALL ON YOUR GAMING PC
1. Keep a full disk backup for complete rollback. Removed apps/data are not restored
   by settings recovery. This build does not require a VM.
2. Finish pending Windows updates. Close SCREEPYOS and recover pending sessions.
3. Open SCREEPYOS-0.9.1-Gaming-PC-Experimental.apbx in AME Wizard.
4. Review wizard choices, including browser replacement. Browser installation still
   requires internet and WinGet. Edge removal remains part of the inherited flow,
   following browser verification; WebView2 is kept. Removal may be unavailable.
5. Restart when requested and open SCREEPYOS from its shortcut.

SUPPORTED TARGET
Windows 11 x64 builds 22631, 26100, 26200 and 26300 (26H2; experimental). ARM64 is not supported.
Clean installation or upgrades from 0.4.1, 0.5.0, 0.6.0, 0.7.0, 0.7.1, 0.7.2,
0.7.3, 0.7.4, 0.7.5 or 0.8.0. Installed under LOCALAPPDATA/SCREEPYOS/App-0.9.1.
Existing Competitive profiles and backups remain. Recreate desktop game shortcuts
from Game library to use the new app. Old app folders are retained.

GAME LIBRARY
Select the actual game executable, not the launcher. Save the profile before use.
Normal CPU priority remains the default. AboveNormal/High are optional experiments;
High can starve other tasks. No Realtime priority or anti-cheat bypass is offered.
Power and capture changes are opt-in. High performance requires AC and an existing
supported plan. Start the session, launch normally or use your chosen launch file,
then stop and restore. Unfinished recovery is retried through Game library.
Your current priority/power changes are not guaranteed to improve FPS.

BENCHMARKS
Use the same game scene, resolution, graphics, frame cap and warm-up each time.
Collect at least three BEFORE and three AFTER runs on your gaming PC. Change one
setting between groups. Choose all runs for a side in one import; reimport replaces
that side. Optional PresentMon integration is available in Performance Lab; its binary is not bundled.
Supported CSV fields: FrameTimeMs or legacy PresentMon MsBetweenPresents (ms).
Use one game/process/swap chain. Captures need at least 100 valid positive frames;
several thousand are preferable. Loading screens should not be mixed into a run.
Median FPS is the median of individual run averages. Range shows min/max run FPS.
Mean 1% low averages per-run lows (1000 / mean slowest 1% of frame times).
Mean P99 averages per-run nearest-rank 99th-percentile frame times; lower is better.
Overlapping FPS ranges and fewer than three runs are flagged. These checks are not
a statistical significance test and cannot establish that a tweak caused a gain.
Export the comparison before closing; it is not automatically saved. This page
does not measure input latency. No real benchmark results ship in this build.

OPTIONAL CLEANUP AND RECOVERY
No apps, services, Office, OneDrive sync or power changes are preselected on the
Optional cleanup page. Apply still enables Game Mode and reduces suggestions.
Select only what you want. Bluetooth, printing and indexing have real tradeoffs.
Office removal is separate and unchecked. App data may be lost upon removal.
Restore user/system settings reverses the latest relevant step, not everything.
Removed apps and Office require reinstallation. Theme & recovery handles user
settings; Hardware & power handles manual power backups; Game library handles
session recovery. Conflicting changes are reported instead of overwritten.
Legacy 0.7.x profiles/priority recovery is under User guide. Those old profiles are
not automatically migrated. Recreate them in Game library. Ambiguous priority
backups are retained; closing the affected game ends that process's priority.
Defender, Firewall, UAC, Windows Update, Xbox, Store and WebView2 remain protected
by the inherited design. Drivers are linked, not silently replaced.

VALIDATION LIMITS
See VALIDATION.txt. Syntax, mock logic and isolated Windows UI checks do not prove
real AME installation, system mutation/recovery, anti-cheat compatibility or FPS.
No performance uplift is claimed until you measure it on your own hardware.
