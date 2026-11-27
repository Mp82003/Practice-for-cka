# Q05. Update a Container Image [Beginner]

## Objective

Update the container image of an existing Kubernetes Deployment from `nginx:1.25` to `nginx:1.27` without creating a second Deployment.

## Requirements

| Configuration | Value |
|---|---|
| Deployment | web-deploy |
| Container Name | nginx |
| Old Image | nginx:1.25 |
| New Image | nginx:1.27 |
| Namespace | default |

## Step 1: Check Existing Deployment

```bash
kubectl get deployment web-deploy
```

## Step 2: Update Container Image

Use the imperative `kubectl set image` command.

```bash
kubectl set image deployment/web-deploy nginx=nginx:1.27
```

**Explanation:**

- `set image`: Updates the container image.
- `deployment/web-deploy`: Specifies the existing Deployment.
- `nginx`: Container name.
- `nginx:1.27`: New container image.

## Step 3: Watch Rollout Status

```bash
kubectl rollout status deployment/web-deploy
```

This command monitors the Deployment rollout until it completes or fails.

## Step 4: Verify Deployment Image

```bash
kubectl get deployment web-deploy -o wide
```

Verify that the Deployment uses `nginx:1.27`.

## Step 5: Verify Pod Images

```bash
kubectl get pods -l app=web-deploy -o custom-columns=NAME:.metadata.name,IMAGE:.spec.containers[*].image
```

Expected: All active Pods should use `nginx:1.27`.

## Step 6: Verify Deployment Rollout History

```bash
kubectl rollout history deployment/web-deploy
```

This command displays the Deployment revision history.

## Important Concepts

### What is kubectl set image?

It is an imperative command used to update the container image of an existing Kubernetes workload.

### What is Rolling Update?

A Rolling Update gradually replaces old Pods with new Pods to update an application without requiring all Pods to stop simultaneously.

### What is kubectl rollout status?

It monitors the progress of a Deployment rollout and reports whether the update completes successfully.

## Completion Checklist

- [ ] Existing Deployment identified
- [ ] Container name verified
- [ ] Image updated from nginx:1.25 to nginx:1.27
- [ ] Rollout status verified
- [ ] Deployment image verified
- [ ] All active Pod images verified
- [ ] Rollout completed successfully

## Learning Outcome

Learned how to update a container image in an existing Kubernetes Deployment using `kubectl set image`, monitor rolling updates and verify the new image on active Pods.

**Status:** Documentation prepared. Mark completed only after successful cluster verification.

