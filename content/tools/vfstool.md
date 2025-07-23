+++
title = "VFSTool"
description = "Command-line tool for visualizing and troubleshooting OpenMW's virtual filesystem. Not actually mandatory for modlist installs, but very helpful for fixing one."
+++

## Why Bother?

VFSTool can help you diagnose issues in your modlist! It's also able to help you use tools meant for Morrowind.exe, by smashing all of your OpenMW data directories together. This can help run tools such as `Merged Lands`, `tes3cmd`, or even in just playing an MWSE setup based on your OpenMW configuration.

{% scenario(
    label="Troubleshooting",
    title="Using TES3CMD with OpenMW Data Directories",
    steps=[
        'vfstool "C:\Users\MyUserName\Documents\My Games\openmw\openmw.cfg" collapse -s ./my_merged_folder',
        'cd my_merged_folder',
        'tes3cmd dump --type NPC --match "Caius Cosades" *.[eE][sS][mpMP]'
    ]
) %}
To do this, you must collapse all of your Data Directories into a single folder.
Then *any* Morrowind.exe compatible tool can be ran against your existing setup!  
  
For this case it's important to use the -s argument, to avoid duplicating files.  
  
This means all files created will actually be symlinks to the originals,
which take a fraction of the disk space.  
  
NOTE: You don't actually need to specify the openmw.cfg, if using the default one.
{% end %}

{% scenario(
    label="Enhancements"
    title="Using OpenMW.cfg with Oblivion"
    steps = [
        "Copy Oblivion's `data` folder to whatever location you'll keep mods in",
        'Rename it to `oblivion-data` or similar',
        'Create an openmw.cfg file in the root directory of your Oblivion installation (the same folder as Oblivion.exe)',
        'Add `oblivion-data` to your OpenMW.cfg, and add mods to it however you prefer',
        'vfstool "C:\Games\Oblivion\openmw.cfg" collapse -ae "C:\Games\Oblivion\Data"',
    ]
) %}
As with before, we'll collapse the OpenMW.cfg into a single folder.  
  
Before running VFSTool, move Oblivion's `data` folder somewhere, and add it to an openmw.cfg.  
  
Unlike previously, we'll allow copying and extraction to eke out some shorter load times.  
  
The process is identical for Morrowind.exe or any other supported Bethesda title - Up to Skyrim Special Edition
{% end %}
