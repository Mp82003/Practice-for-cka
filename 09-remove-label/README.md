# Q09 – Remove a Label from an Existing Pod

## Objective

Remove only the `tier=frontend` label from the existing Pod `nginx-pod`.

### Requirements

- Remove `tier=frontend`.
- Keep the `app=nginx` label.
- Do not delete or recreate the Pod.
- Verify that the `tier` label is absent.
- Verify that `app=nginx` remains present.
- Check that the Pod is still Ready.

## Commands Used

### 1. Check Existing Pod Labels

```bash
kubectl get pod nginx-pod --show-labels
```

### 2. Remove the tier Label

```bash
kubectl label pod nginx-pod tier-
```

### 3. Verify Updated Labels

```bash
kubectl get pod nginx-pod --show-labels
```

### 4. Verify Pod Readiness

```bash
kubectl get pod nginx-pod
```

## Expected Output

```text
NAME        READY   STATUS    LABELS
nginx-pod   1/1     Running   app=nginx,env=testing,run=nginx-pod
```

## Key Concepts Learned

- `kubectl label`: Manage labels on Kubernetes resources.
- `tier-`: Remove the specified label from a resource.
- `--show-labels`: Display all labels attached to a Pod.
- `kubectl get pod`: Verify Pod readiness and status.

## Result

- [x] Removed `tier=frontend`.
- [x] Confirmed `app=nginx` remains present.
- [x] Verified Pod is `1/1 Running`.
- [x] Pod was not deleted or recreated.

**Status: Completed**

