SCREEPYOS 0.8.0 - Gaming PC Edition (Experimental)

WHAT CHANGED
Black-and-gray dashboard with original SCREEPYOS logo with an overview and game-library navigation.
Benchmarks accepts multiple CSV runs per side, reports median FPS and run ranges,
mean 1% lows and P99, and exports a text report. No fabricated FPS score.
Cleanup selections, Office removal and high-performance power are unchecked.
Wizard background-component disabling and animation reduction are opt-in.
Desktop presets are Minimal, Balanced and Full visuals, not hardware/FPS tiers.
Legacy priority recovery now preserves changed priorities or ambiguous old backups.

INSTALL ON YOUR GAMING PC
1. Keep a full disk backup for complete rollback. Removed apps/data are not restored
   by settings recovery. This build does not require a VM.
2. Finish pending Windows updates. Close SCREEPYOS and recover pending sessions.
3. Open SCREEPYOS-0.8.0-Gaming-PC-Experimental.apbx in AME Wizard.
4. Review wizard choices, including browser replacement. Browser installation still
   requires internet and WinGet. Edge removal remains part of the inherited flow,
   following browser verification; WebView2 is kept. Removal may be unavailable.
5. Restart when requested and open SCREEPYOS from its shortcut.

SUPPORTED TARGET
Windows 11 x64 builds 22631, 26100 and 26200. ARM64 is not supported.
Clean installation or upgrades from 0.4.1, 0.5.0, 0.6.0, 0.7.0, 0.7.1, 0.7.2,
0.7.3, 0.7.4 or 0.7.5. Installed under LOCALAPPDATA/SCREEPYOS/App-0.8.0.
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
that side. No live capture tool is bundled. Use an external frame-time capture.
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
