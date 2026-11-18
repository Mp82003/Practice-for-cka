# Q06 – Filter Pods Using Label Selectors

## Objective

Practice filtering Kubernetes Pods using label selectors without deleting or modifying any existing Pods.

This exercise uses the Pods created in Q05.

## Requirements

| Task | Label Selector | Expected Pods |
|---|---|---|
| 1. Filter nginx Pods | `app=nginx` | pod-1, pod-2 |
| 2. Filter development Pods | `env=dev` | pod-1, pod-3 |
| 3. Filter nginx development Pods | `app=nginx,env=dev` | pod-1 |
| 4. Filter dev or prod Pods | `env in (dev,prod)` | pod-1, pod-2, pod-3 |

## 1. Filter Pods Where app=nginx

Command:

```bash
kubectl get pods -l app=nginx
```

Expected Pods:
- pod-1
- pod-2

## 2. Filter Pods Where env=dev

Command:

```bash
kubectl get pods -l env=dev
```

Expected Pods:
- pod-1
- pod-3

## 3. Filter Pods Where app=nginx AND env=dev

Command:

```bash
kubectl get pods -l app=nginx,env=dev
```

Expected Pod:
- pod-1

Multiple label requirements separated by commas work as an AND condition.

## 4. Set-Based Selector

Filter Pods where environment is either `dev` or `prod`.

Command:

```bash
kubectl get pods -l 'env in (dev,prod)'
```

Expected Pods:
- pod-1
- pod-2
- pod-3

## Important Kubernetes Concepts

### Equality-Based Selectors

Equality-based selectors use operators such as:

- `=` – Equal
- `==` – Equal
- `!=` – Not equal

Example:

```bash
kubectl get pods -l app=nginx
```

### Set-Based Selectors

Set-based selectors support:

- `in` – Matches any value in a specified set.
- `notin` – Excludes specified values.
- `!` – Selects resources where a label does not exist.

Example:

```bash
kubectl get pods -l 'env in (dev,prod)'
```

### AND Condition

Multiple selector requirements separated by commas are evaluated as AND conditions.

Example:

```bash
kubectl get pods -l app=nginx,env=dev
```

## Verification

Display Pods with their labels:

```bash
kubectl get pods --show-labels
```

Filter Pods and verify their names:

```bash
kubectl get pods -l app=nginx
kubectl get pods -l env=dev
kub
