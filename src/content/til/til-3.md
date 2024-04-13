---
author: David Carrillo
pubDatetime: 2024-04-03
title: MicroK8s - Lightweight Kubernetes Distributed Across 4 Raspberry Pi Nodes
postSlug: ""
featured: true
draft: false
tags:
  - linux
description: TIL - How to install, configure, and use MicroK8s on home cloud cluster of 4 Raspberry Pi Model 4B(s).
---

### MicroK8s - Lightweight Kubernetes Distributed Across 4 Raspberry Pi Nodes

MicroK8s abstracts away much of the standard Kubernetes complexity, leaving you with a lightweight set of commands that expose minimal ops API(s) to manage your Kubernetes cluster. This is a great way to get started with Kubernetes on your Raspberry Pi. No config files, no setup to do, just install & and sequentially configure microk8s on your Raspberry Pi.

MicroK8s supports both x86 & ARM architectures, and allows you to run Kubernetes in a mutable container with no extraneous parts or dependencies. With an eye on increased security and much simpler operations, MicroK8s is a great choice for home cloud computing.

MicroK8s in an opionionated install, providing in addition to the MicroK8s package, a set of the most popular Kubernetes packages such as Prometheus, K9s, Helm, and Grafana.

### What Is High Availability In MicroK8s?

Simpler, smarter, stronger Kubernetes.

Once a MicroK8s cluster reaches a total node size >= 3, it is highly available. This means that the cluster will automatically recover if it fails, and in the event of a power outage, your MicroK8s cluster can be easily rebuilt. This self-healing process is a key part of MicroK8s & it allows for the withstanding of node departure events.
