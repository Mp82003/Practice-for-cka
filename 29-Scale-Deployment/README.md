# Q04. Scale a Deployment [Beginner]

## Objective

Scale an existing Kubernetes Deployment named `web-deploy` from 3 replicas to 6 replicas without deleting or recreating the Deployment.

## Requirements

| Configuration | Value |
|---|---|
| Deployment | web-deploy |
| Initial Replicas | 3 |
| Desired Replicas | 6 |
| Container Image | nginx:1.25 |
| Namespace | default |

## Step 1: Check Existing Deployment

```bash
kubectl get deployment web-deploy
```

Initially, the Deployment had 3 replicas.

## Step 2: Scale the Deployment

```bash
kubectl scale deployment web-deploy --replicas=6
```

**Output:**

```text
deployment.apps/web-deploy scaled
```

This command changes the desired replica count from 3 to 6 without deleting the Deployment.

## Step 3: Verify Deployment

```bash
kubectl get deployment web-deploy
```

**Actual Output:**

```text
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
web-deploy   6/6     6            6           111m
```

### Verification

- Desired replicas: 6
- Current replicas: 6
- Ready replicas: 6
- Available replicas: 6

## Step 4: Watch Pod Creation

```bash
kubectl get pods -l app=web-deploy -w
```

**Explanation:**

- `get pods`: Lists Pods.
- `-l app=web-deploy`: Filters Pods using the Deployment label.
- `-w`: Watches changes continuously.

Press `Ctrl + C` to stop watching.

## Step 5: Verify All Six Pods

```bash
kubectl get pods -l app=web-deploy
```

Expected: Six Pods in Running and Ready state (`1/1`).

## Step 6: Verify Container Images

```bash
kubectl get pods -l app=web-deploy -o custom-columns=NAME:.metadata.name,IMAGE:.spec.containers[*].image
```

Expected: All six Pods should use:

```text
nginx:1.25
```

## Important Concepts

### What is Scaling?

Scaling means increasing or decreasing the number of Pod replicas according to application requirements.

### What does kubectl scale do?

The `kubectl scale` command changes the desired replica count of an existing Kubernetes workload.

### What is -w?

The `-w` flag enables watch mode and continuously displays resource changes.

### Does Scaling Delete the Deployment?

No. Scaling updates the desired replica count of the existing Deployment.

## Completion Checklist

- [x] Existing Deployment identified
- [x] Deployment scaled from 3 to 6
- [x] Deployment reports 6/6 Ready
- [x] Desired, current and available replicas verified
- [ ] All six Pods verified
- [ ] All six container images verified
- [ ] Pod creation watched using `-w`

## Learning Outcome

Learned how to scale an existing Kubernetes Deployment imperatively using `kubectl scale`, monitor Pod creation and verify the desired replica count.

**Status:** Scaling successful; final Pod and image verification pending.

