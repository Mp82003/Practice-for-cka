# Q10 – Use Annotations in Kubernetes

## Objective

Add two annotations to the existing Pod `nginx-pod` without changing its image or container settings.

### Requirements

- Add `owner=platform-team`.
- Add `purpose=cka-practice`.
- Use `kubectl annotate`.
- Do not use labels for this task.
- Inspect Pod metadata and verify both annotations.
- Do not delete or recreate the Pod.

## Commands Used

### 1. Inspect Existing Pod Metadata

```bash
kubectl get pod nginx-pod -o yaml
```

### 2. Add Annotations

```bash
kubectl annotate pod nginx-pod owner=platform-team purpose=cka-practice
```

### 3. Verify Annotations

```bash
kubectl get pod nginx-pod -o yaml
```

Alternatively:

```bash
kubectl describe pod nginx-pod
```

### 4. Verify Pod Status

```bash
kubectl get pod nginx-pod
```

## Expected Output

Under `metadata.annotations`:

```yaml
metadata:
  annotations:
    owner: platform-team
    purpose: cka-practice
```

Pod status:

```text
NAME        READY   STATUS
nginx-pod   1/1     Running
```

## Key Concepts Learned

**Annotations:** Annotations store additional descriptive information or metadata about Kubernetes resources.

**Labels vs Annotations:**
- Labels identify and select Kubernetes resources using label selectors.
- Annotations store additional descriptive metadata and are not used by label selectors.

## Result

- [x] Added `owner=platform-team`.
- [x] Added `purpose=cka-practice`.
- [x] Used annotations instead of labels.
- [x] Inspected Pod metadata.
- [x] Pod image and container settings were not changed.
- [x] Pod was not deleted or recreated.

**Status: Completed**

