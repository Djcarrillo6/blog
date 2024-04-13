---
author: David Carrillo
pubDatetime: 2024-03-24
title: The Linux File System
postSlug: ""
featured: true
draft: false
tags:
  - linux
description: TIL - The Linux File System
---

Setup To Configure Bluetooth Keyboard over SSH on a Raspberry Pi:

1. Connect to Raspberry Pi over SSH
2. `sudo bluetoothctl` - to enable bluetooth
3. `agent on` - to enable bluetooth agent
4. `default - agent` - to set default agent
5. `scan on` - to set scan on
   - Once keyboard has been found, copy device id
   - `devices` - to list devices
6. `scan off` - to set scan off
7. `pair ${device_id}` - to pair device
8. `connect ${device_id}` - to connect device
9. `trust ${device_id}` - to trust device
