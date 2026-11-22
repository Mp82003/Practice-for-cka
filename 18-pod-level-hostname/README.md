# Q18: Use a Pod-Level Hostname (Intermediate)

## Objective

Create a Kubernetes Pod named `hostname-demo` using the `busybox:latest` image and configure its hostname as `cka-node` at the Pod specification level.

## Requirements

| Configuration | Value |
|---|---|
| Pod Name | hostname-demo |
| Container Name | hostname-demo |
| Image | busybox:latest |
| Pod Hostname | cka-node |

## 1. Create Pod Manifest

Create a file named `pod-hostname.yaml`.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hostname-demo
spec:
  hostname: cka-node
  containers:
    - name: hostname-demo
      image: busybox:latest
      command: ["sh", "-c", "sleep 3600"]
```

**Important:** The `hostname` field is configured at the Pod spec level, not inside the container definition.

The `sleep 3600` command keeps the BusyBox container running so that we can execute commands inside it.

## 2. Apply the Manifest

```bash
kubectl apply -f pod-hostname.yaml
```

Expected output:

```text
pod/hostname-demo created
```

## 3. Verify Pod Status

```bash
kubectl get pods
```

Expected output:

```text
NAME            READY   STATUS    RESTARTS
hostname-demo   1/1     Running   0
```

## 4. Execute Command Inside Container

Run the hostname command inside the container.

```bash
kubectl exec hostname-demo -- hostname
```

Expected output:

```text
cka-node
```

## 5. Inspect Pod Specification

```bash
kubectl get pod hostname-demo -o yaml
```

Verify the hostname field:

```yaml
spec:
  hostname: cka-node
```

## 6. Describe Pod

```bash
kubectl describe pod hostname-demo
```

Use this command to inspect the Pod configuration, container state, events and other details.

## 7. Important Concepts

### Pod Name vs Hostname

| Field | Value | Purpose |
|---|---|---|
| metadata.name | hostname-demo | Identifies the Kubernetes Pod |
| spec.hostname | cka-node | Sets the hostname inside the Pod |

### What is a Hostname?

A hostname is a name used to identify a system or container within a network environment.

### What does kubectl exec do?

`kubectl exec` executes a command inside a running container.

Command structure:

```bash
kubectl exec POD_NAME -- COMMAND
```

Example:

```bash
kubectl exec hostname-demo -- hostname
```

## 8. Important CKA Notes

- Configure hostname under `spec.hostname`.
- Do not confuse `metadata.name` with `spec.hostname`.
- Use `kubectl exec` to verify the hostname from inside the container.
- BusyBox may exit immediately without a long-running command.
- Use `sleep 3600` to keep the container running during this exercise.

## 9. Cleanup

Delete the Pod after completing the exercise.

```bash
kubectl delete pod hostname-demo
```

Expected output:

```text
pod "hostname-demo" deleted
```

## Final Result

Successfully created a Kubernetes Pod named `hostname-demo` using `busybox:latest` and configured its Pod-level hostname as `cka-node`.

**Verification Output:**

```text
cka-node
```

**Status:** Completed

**Difficulty:** Intermediate

**Topic:** Kubernetes Pod Configuration

**Practice Area:** CKA – Workloads & Scheduling

**Completed:** 22 November 2026

