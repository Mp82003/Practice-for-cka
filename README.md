# Practice-for-cka
Q01. Create your first Pod [Beginner]
Create a Pod named nginx-pod in the default namespace using the image nginx:latest.
Requirements
• Use an imperative kubectl command; do not write a YAML file for this task.
• The Pod must contain exactly one application container.
• Wait until the Pod reaches Running, then inspect its details.
• Record the Pod name, namespace, node, Pod IP, container image and Ready status.
Expected result: The Pod exists in default, has one container using nginx:latest, and reports Ready 1/1.

# Kubernetes & CKA Hands-on Practice 🚀

This repository contains my hands-on Kubernetes practice and preparation for the **Certified Kubernetes Administrator (CKA)** certification.

My goal is to develop practical Kubernetes administration skills by solving real-world tasks, practicing kubectl commands, troubleshooting cluster issues, and working with Kubernetes resources.

## 🎯 Learning Objectives

- Understand Kubernetes architecture and core components.
- Create and manage Pods, Deployments, and Services.
- Practice imperative and declarative commands.
- Configure networking and storage.
- Perform cluster maintenance and troubleshooting.
- Practice ETCD backup and restore.
- Develop real-world Kubernetes administration skills.

## 🛠️ Environment

| Tool | Environment |
|---|---|
| OS | Windows 11 + WSL2 |
| Linux | Ubuntu |
| Kubernetes Cluster | Minikube |
| Container Runtime | Docker |
| CLI Tool | kubectl |

## 📚 Practice Topics

| No. | Topic | Status |
|---|---|---|
| 01 | Create Your First Pod | ✅ Completed |
| 02 | Pod Management | ⏳ Upcoming |
| 03 | Multi-Container Pods | ⏳ Upcoming |
| 04 | Labels and Selectors | ⏳ Upcoming |
| 05 | Deployments | ⏳ Upcoming |
| 06 | Services | ⏳ Upcoming |
| 07 | ConfigMaps and Secrets | ⏳ Upcoming |
| 08 | Persistent Volumes and PVCs | ⏳ Upcoming |
| 09 | Scheduling | ⏳ Upcoming |
| 10 | Troubleshooting | ⏳ Upcoming |

## 📁 Repository Structure

```text
Practice-for-cka/
│
├── README.md
│
├── Pods/
├── Deployments/
├── Services/
├── Networking/
├── Storage/
├── Scheduling/
├── Troubleshooting/
└── etcd/
```

*Folders will be added as I progress through the practice tasks.*

## 💻 Practice Approach

For every task, I aim to:

1. Understand the problem statement.
2. Solve the task independently.
3. Use kubectl commands to verify the result.
4. Troubleshoot errors and understand their causes.
5. Document important commands and learnings.

## 📈 Progress

- [x] First Kubernetes Pod created using an imperative command.
- [x] Verified Pod status and readiness.
- [x] Inspected Pod configuration using kubectl describe.
- [ ] Complete remaining CKA practice tasks.

## 🔗 Connect

**GitHub:** [Mp82003](https://github.com/Mp82003)

---

*Learning by doing. Building practical Kubernetes administration skills one task at a time.*
