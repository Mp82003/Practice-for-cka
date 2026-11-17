# Q03 – Inspect Pod Details 🔍

## Objective

Inspect an existing Kubernetes Pod named `nginx-pod` and collect its runtime information without modifying the Pod.

## Requirements

- Find the current Pod status and readiness.
- Identify the Pod IP and scheduled node.
- Find the container image and container name.
- Inspect Pod events.
- Use at least two different kubectl inspection commands.

## Environment

| Tool | Details |
|---|---|
| OS | Ubuntu (WSL2) |
| Kubernetes Cluster | Minikube |
| CLI | kubectl |
| Namespace | default |
| Pod | nginx-pod |

## Implementation

### 1. Check Pod Status

Command:

```bash
kubectl get pod nginx-pod
```

Observed output:

```text
NAME        READY   STATUS    RESTARTS
nginx-pod   1/1     Running   0
```

### 2. Inspect Detailed Pod Information

Command:

```bash
kubectl describe pod nginx-pod
```

### 3. Runtime Information

| Field | Observed Value |
|---|---|
| Pod Name | nginx-pod |
| Namespace | default |
| Pod Phase | Running |
| Ready Condition | True |
| Pod IP | 10.244.2.253 |
| Node | minikube |
| Container Name | nginx-pod |
| Container Image | nginx:latest |
| Ready | 1/1 |

### 4. Inspect Pod Events

Pod events were initially visible in the `kubectl describe` output.

Important events observed:

| Event | Description |
|---|---|
| Scheduled | Pod successfully assigned to Minikube |
| Pulling | Kubernetes started pulling nginx image |
| Pulled | Container image downloaded successfully |
| Created | Container was created |
| Started | Container successfully started |

Command attempted to filter events:

```bash
kubectl get events --field-selector involvedObject.name=nginx-pod
```

Observation:

```text
No resources found in default namespace.
```

A subsequent `kubectl get events` also returned no resources. The earlier event details were available in the Pod description output.

## Key Learnings

1. Difference between `kubectl get` and `kubectl describe`.
2. How to inspect Pod runtime information.
3. Understanding Pod IP and node assignment.
4. Understanding container readiness.
5. Identifying Kubernetes lifecycle events.
6. Using field selectors to filter Kubernetes resources.
7. Understanding that Kubernetes Events have limited retention.

## Final Result

Successfully inspected the existing `nginx-pod` without changing its configuration.

**Status: Completed ✅**

---

*Part of my Kubernetes and CKA hands-on practice journey.*
