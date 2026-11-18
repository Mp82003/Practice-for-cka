# Q07 – Add Labels to an Existing Pod

## Objective

Add two labels to an existing Kubernetes Pod named `nginx-pod` without deleting or recreating it.

## Requirements

Add the following labels:

| Label Key | Value |
|---|---|
| app | nginx |
| tier | frontend |

## 1. Check Existing Pod

Command:

```bash
kubectl get pod nginx-pod
```

Verify that the Pod is already running before modifying its labels.

## 2. Add First Label

Add `app=nginx` to the existing Pod.

```bash
kubectl label pod nginx-pod app=nginx
```

Expected output:

```text
pod/nginx-pod labeled
```

## 3. Add Second Label

Add `tier=frontend` to the same Pod.

```bash
kubectl label pod nginx-pod tier=frontend
```

Expected output:

```text
pod/nginx-pod labeled
```

## 4. Verify Labels on Individual Pod

Command:

```bash
kubectl get pod nginx-pod --show-labels
```

Expected labels:

```text
app=nginx,tier=frontend
```

## 5. Verify Using Label Selector

Check whether the Pod matches both labels.

```bash
kubectl get pods -l app=nginx,tier=frontend
```

Expected Pod:

```text
nginx-pod
```

## Important Kubernetes Concepts

### kubectl label

The `kubectl label` command is used to add or update labels on existing Kubernetes resources.

General syntax:

```bash
kubectl label pod POD_NAME KEY=VALUE
```

### Overwrite Existing Labels

If a label already exists and its value needs to be changed, use:

```bash
kubectl label pod POD_NAME KEY=VALUE --overwrite
```

The `--overwrite` flag is only necessary when updating an existing label.

### Label Selectors

Multiple labels separated by commas represent an AND condition.

Example:

```bash
kubectl get pods -l app=nginx,tier=frontend
```

## Learning Outcomes

1. Learned how to add labels to existing Pods.
2. Practiced using `kubectl label`.
3. Understood the purpose of the `--overwrite` flag.
4. Verified labels using `--show-labels`.
5. Used multiple label selectors to identify matching Pods.
6. Modified Pod metadata without deleting or recreating the Pod.

## Completion Status

- [x] Existing Pod identified.
- [x] Added `app=nginx`.
- [x] Added `tier=frontend`.
- [ ] Verified both labels on the individual Pod.
- [ ] Verified the combined label selector.

**Expected Result:** The existing `nginx-pod` retains its original configuration and runs with both requested labels.

