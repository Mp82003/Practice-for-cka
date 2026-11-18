# Q08 – Update an Existing Pod Label

## Objective
Update an existing Pod's label without deleting or recreating the Pod.

**Requirement:**
- Change the existing label `env=dev` to `env=testing`.
- Use `kubectl label` with the `--overwrite` flag.
- Verify the updated labels.

## Commands Used

### 1. Check Existing Pod

```bash
kubectl get pod nginx-pod --show-labels
```

### 2. Update Existing Label

```bash
kubectl label pod nginx-pod env=testing --overwrite
```

### 3. Verify Updated Label

```bash
kubectl get pod nginx-pod --show-labels
```

### 4. Remove Accidentally Added Extra Label

```bash
kubectl label pod nginx-pod dev-
```

## Expected Result

```text
NAME        READY   STATUS    LABELS
nginx-pod   1/1     Running   app=nginx,env=testing,run=nginx-pod,tier=frontend
```

## Key Concepts Learned

- `kubectl label`: Add or update labels on Kubernetes resources.
- `--overwrite`: Update an existing label's value.
- `dev-`: Remove a label from a resource.
- `--show-labels`: Display all labels attached to a Pod.

## Important Note

The original question mentioned `pod-1`. Since `pod-1` was unavailable in the current cluster, I practised the same label-update operation on the existing `nginx-pod`.

## Status

- [x] Checked existing Pod labels
- [x] Updated `env=dev` to `env=testing`
- [x] Verified updated labels
- [x] Practised without deleting or recreating the Pod

