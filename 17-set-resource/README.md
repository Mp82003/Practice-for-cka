# Q17: Set Resource Requests and Limits (Intermediate)

## Objective

Create a Kubernetes Pod named `resource-demo` using the `nginx:latest` image and configure CPU and memory resource requests and limits.

## Requirements

| Configuration | Value |
|---|---|
| Pod Name | resource-demo |
| Container Name | resource-demo |
| Image | nginx:latest |
| CPU Request | 100m |
| CPU Limit | 500m |
| Memory Request | 64Mi |
| Memory Limit | 128Mi |

## 1. Create Pod Manifest

Create a file named `resource.yaml`.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: resource-demo
spec:
  containers:
    - name: resource-demo
      image: nginx:latest
      resources:
        requests:
          cpu: "100m"
          memory: "64Mi"
        limits:
          cpu: "500m"
          memory: "128Mi"
```

## 2. Apply the Manifest

```bash
kubectl apply -f resource.yaml
```

Expected output:

```text
pod/resource-demo created
```

## 3. Verify Pod Status

```bash
kubectl get pods
```

Expected output:

```text
NAME            READY   STATUS    RESTARTS
resource-demo   1/1     Running   0
```

## 4. Inspect Pod Specification

```bash
kubectl get pod resource-demo -o yaml
```

Check the `resources` section to verify the configured requests and limits.

## 5. Describe Pod Resources

```bash
kubectl describe pod resource-demo
```

Expected resource configuration:

```text
Requests:
  cpu:      100m
  memory:   64Mi

Limits:
  cpu:      500m
  memory:   128Mi
```

## 6. Important Concepts

**Resource Requests:**
- Define the amount of CPU and memory requested by a container.
- Kubernetes uses requests when scheduling Pods onto nodes.

**Resource Limits:**
- Define the maximum CPU and memory a container can use.
- CPU usage can be throttled when it reaches its limit.
- A container exceeding its memory limit can be terminated with an OOMKilled status.

### CPU Units

| Value | Meaning |
|---|---|
| 100m | 0.1 CPU core |
| 500m | 0.5 CPU core |

### Memory Units

| Value | Meaning |
|---|---|
| 64Mi | 64 Mebibytes |
| 128Mi | 128 Mebibytes |

## 7. Important CKA Notes

- Always define resource requests and limits under the container's `resources` field.
- Use `requests` (plural), not `request`.
- CPU and memory must be configured separately.
- Requests should not exceed their corresponding limits for this task.
- Use `kubectl describe pod` to inspect configured resources.

## 8. Cleanup

Delete the Pod after completing the exercise.

```bash
kubectl delete pod resource-demo
```

Expected output:

```text
pod "resource-demo" deleted
```

## Final Result

Successfully created a Kubernetes Pod named `resource-demo` using `nginx:latest` with the following resource configuration:

- CPU Request: 100m
- CPU Limit: 500m
- Memory Request: 64Mi
- Memory Limit: 128Mi

**Status:** Completed

**Difficulty:** Intermediate

**Topic:** Kubernetes Pod Resource Management

**Practice Area:** CKA – Workloads & Scheduling

