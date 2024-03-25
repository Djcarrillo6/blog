---
author: David Carrillo
pubDatetime: 2024-03-25
title: An Intriguing Look Into Containers, Kubernetes, WASM, & Home Cloud Computing
postSlug: ""
featured: true
draft: false
tags:
  - containers
  - kubernetes
  - wasm
  - home-cloud-computing
  - raspberry-pi
description: Explore the fascinating world of Kubernetes and container orchestration in this deep-dive post. Learn about bare metal servers, cloud provider security, Docker, and the future potential of WASM, all wrapped up with an exciting glimpse into a hands-on Raspberry Pi & Kubernetes home cloud project.
---

# Kubernetes: An Intriguing Dive Into Containerization

As a software engineer, specializing in backend and cloud development, I felt it was high time I take a closer look into Kubernetes, the reigning champion of container orchestration.

## **The Bare Metal Effect and Cloud Cost Soaring**

When we talk about a "bare metal" server, imagine it as a crew of tech-elements - Input/Output (I/O), computation power, and memory - all working together in a closely-knit unit on a single ship, with no virtual separation. In comparison to dispersed remote outposts, this arrangement significantly enhances communication, reducing latency, and streamlining coordination for better performance. The "bare metal" server is akin to a highly efficient planet in our data universe, generating a gravitational pull that holds everything together smoothly.

Meanwhile, the cloud realm has been weathering a storm. Costs have been surging, and some providers have even ceased offering free tiers. In the face of this skyrocketing expense, an essential silver lining emerges: the value of mastering and managing your tech-stack end-to-end. Much like overseeing your household budget, maintaining control over your tech stack from top to bottom can result in substantial savings, an art form that's increasingly valuable in our evolving cloud computing and server management landscape.

## **Cloud Providers: Isolation and Security**

Provisioning a VPS or VM on a service like EC2 is akin to renting a secure house in the cloud neighborhood. The providers install a virtual 'hypervisor layer,' acting like robust walls isolating individual customer resources. It's constructed at the kernel level, giving you a sturdy shield against external intrusions. It's as if you were living in a secure compound - you can't access the city's command center (the host kernel) or any critical infrastructure, offering a robust layer of security.

**Key takeaways:**

- **Cloud Providers:** Services like EC2, offer VPS or VM.
- **Hypervisor Layer:** The security mechanism, acting as a protective wall at the kernel level.
- **Resource Isolation:** No access to the host kernel or other critical parts, ensuring secure boundaries.
- **Robust Security:** Layered architecture for enhanced protection.

## **The Magic of Kubernetes**

Kubernetes, acting as the orchestrator maestro, flawlessly manages the concert of running and monitoring containers, marrying the art of performance and resilience. It shines brightest when handling multiple containers, reminiscent of a skilled juggler keeping multiple balls in the air; when one machine crashes, Kubernetes swiftly and smoothly moves the workloads to another, maintaining the seamless harmony of performance. The soul of Kubernetes is divided into two harmonious phases: the control plane and the worker plane. The control plane, like the conductor, provides the instruction and guidance, including components like the API server, a controller manager, and a scheduler, centered around the data store, commonly `Etcd`. The worker plane, on the other hand, forms the ensemble - the fleet of worker nodes - that synchronize to the conductor's beat, handling workloads and conforming to settings defined by the control plane.

**Control Plane vs. Worker Plane**

|                      Control Plane                      |                           Worker Plane                            |
| :-----------------------------------------------------: | :---------------------------------------------------------------: |
| Acts as the conductor, providing instruction & guidance |          Forms the ensemble, executing the instructions           |
|   Contains API server, controller manager, scheduler    |                 Comprises a fleet of worker nodes                 |
|   Centralized around the data store, commonly `Etcd`    | Handles workloads and implement settings defined by control plane |

## **Containers and Docker**

Before Docker debuted on the tech stage, containers were like mature tools that were powerful but lacked user-friendliness. Then Docker arrived, making orchestration effortless and bringing containers into the limelight. It was akin to unveiling a streamlined interface for a complex machine, making it widely accessible and straightforward to use. Beneath Docker's simplified surface hides Containered, the preferred runtime for server environments in Kubernetes. Just like the silent engine powering a sleek car, Docker leverages the power of Containered to deliver seamless experiences that have revolutionized the world of container management.

## **WASM vs. Containers**

In the winding journey of technological evolution, interesting crossroads often present themselves. One such intersection is the comparison between Docker and **Web Assembly (WASM)**. According to a documented & powerful comment by one of Docker's creators, if WASM and **WASI (Web Assembly System Interface)** had been around back in 2013, there may have been no need for Docker 🤯. As intriguing as this what-if scenario is, it offers a fascinating insight into the extraordinary potential of WASM/WASI. WASM, in its current form, has limitations—the in-browser sandbox is unable to handle some of the primary use cases that today's apps require. However, with WASI, the landscape could dramatically shift. The newly adopted WASI 0.2.0(released on Jan 25, 2024), provides a stable release of WASI that exposes the component model, which opens the possibility for developers to progressively modify WASM/WASI binaries to meet the explicit needs of their apps, a promising transformation waiting to unfold.

In this evolving scene of WASM vs Containers, certain key factors **give WASM a notable edge**. The size of WASM binaries is significantly smaller, often less than 5MB, while containers usually weigh in at hundreds of MBs. Startup time, too, is strikingly faster for WASM, measured in nanoseconds compared to containers, which can take up to 300ms. Moreover, the compatibility of WASM with various CPU architectures far surpasses that of containers. These advantages pose exciting possibilities on the horizon but also remind us of the constant evolution and need for adaptability in the tech landscape.

**WASM vs Containers**

|            Aspects             |    WASM     |   Containers    |
| :----------------------------: | :---------: | :-------------: |
|              Size              |    < 5MB    | Hundreds of MBs |
|          Startup Time          | Nanoseconds |   Up to 300ms   |
| CPU Architecture Compatibility |    Broad    |     Limited     |

## **Rad! What's Next?**

In the next few years, Kubernetes should be able to run both container-based and WASM module-based workloads. As such, mastering the fundamentals of Kubernetes' control plane would be an excellent way to prepare for this inevitable change. So as software engineers, let's keep exploring and learning. As I expand my knowledge of Kubernetes and WASM, I will keep sharing my learning journey with you all. After all, as the cloud skyrockets, we ground ourselves in the knowledge necessary to navigate these evolving terrains.

## **What I'm Buiding Next**

As I journey deeper into the landscape of cloud computing and edge technology, I want to try setting up a home cloud system powered by Raspberry Pi & Kubernetes. In this setup, I'll use four Raspberry Pi 4B models running on a self-hosted cluster rack. This mini ecosystem, fuelled by Kubernetes, will be my sandbox to play with, experiment, and bring to life the theories and concepts I've been exploring. I'll be posting updates on the progress of this journey!

🚀 #Kubernetes #HomeCloudComputing #RaspberryPi
