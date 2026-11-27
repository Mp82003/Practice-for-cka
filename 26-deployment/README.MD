# Q01. Create a Deployment Imperatively [Beginner]

## Objective
Create a Deployment named `web-deploy` with three identical NGINX replicas using an imperative kubectl command.

## Requirements
- Namespace: `default`
- Deployment name: `web-deploy`
- Image: `nginx:1.25`
- Replicas: `3`
- Creation method: Imperative command

## Step 1: Create Deployment

```bash
kubectl create deployment web-deploy --image=nginx:1.25 --replicas=3
```

**Output:**
```text
deployment.apps/web-deploy created
```

## Step 2: Verify Deployment

```bash
kubectl get deployment web-deploy
```

**Output:**
```text
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
web-deploy   3/3     3            3           16s
```

## Step 3: Verify ReplicaSet

```bash
kubectl get replicaset
```

Expected: A ReplicaSet associated with `web-deploy` showing 3 desired, 3 current and 3 ready replicas.

## Step 4: Verify Pods

```bash
kubectl get pods -o wide
```

Expected: Three NGINX Pods in Running and Ready state (`1/1`).

## Step 5: Verify Pod Ownership

```bash
kubectl describe pods
```

Check the `Controlled By` field. Each Pod should be owned by the expected ReplicaSet.

## Final Verification

| Requirement | Status |
|---|---|
| Deployment created imperatively | PASS |
| Correct image (`nginx:1.25`) | PASS |
| Three replicas configured | PASS |
| Deployment READY 3/3 | PASS |
| ReplicaSet verified | Pending |
| Pod readiness verified | Pending |
| Pod ownership verified | Pending |

## Learning Outcome
Learned how to create a Kubernetes Deployment imperatively using `kubectl create deployment` with a specified container image and replica count.

**Completion:** Partially verified — Deployment is successful. Complete ReplicaSet and Pod ownership checks before marking the task fully completed.

