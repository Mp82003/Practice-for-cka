# Q03. Understand Deployment–ReplicaSet Ownership [Beginner]

## Objective

Inspect an existing Kubernetes Deployment and identify the ReplicaSet and Pods it manages.

Understand the ownership relationship between Deployment, ReplicaSet and Pods.

## Requirements

- Inspect Deployments, ReplicaSets and Pods.
- Use wide output to identify resources.
- Establish ownership using `kubectl describe` or owner references.
- Record resource names.
- Explain why Deployment uses ReplicaSet instead of managing Pods directly.
- Do not edit or delete any resources.

## Step 1: Inspect Deployments

```bash
kubectl get deployments -o wide
```

Identified Deployment:

```text
web-deploy
```

## Step 2: Inspect ReplicaSets

```bash
kubectl get replicasets -o wide
```

Identified ReplicaSet:

```text
web-deploy-55b7476787
```

ReplicaSet status:

- Desired: 3
- Current: 3
- Ready: 3

## Step 3: Inspect Pods

```bash
kubectl get pods -o wide
```

Identified Pods:

```text
web-deploy-55b7476787-jgc9m
web-deploy-55b7476787-plndd
web-deploy-55b7476787-xjbs9
```

All three Pods were Running and Ready (`1/1`).

## Step 4: Describe Deployment

```bash
kubectl describe deployment web-deploy
```

Important information:

- Deployment Name: web-deploy
- Namespace: default
- Selector: app=web-deploy
- Desired Replicas: 3
- Available Replicas: 3
- New ReplicaSet: web-deploy-55b7476787

## Step 5: Understand Ownership

Kubernetes follows this controller hierarchy:

```text
Deployment
    |
    v
ReplicaSet
    |
    v
Pods
```

- Deployment manages the ReplicaSet.
- ReplicaSet manages the Pods.
- Pods run the actual application containers.

## Step 6: Why Does Deployment Create a ReplicaSet?

A Deployment creates a ReplicaSet instead of managing Pods directly because it needs a separate controller to maintain the desired number of Pods and manage their lifecycle.

### Main Reasons

1. **Pod Management:** ReplicaSet ensures the desired number of Pods are running.
2. **Self-healing:** If a Pod gets deleted or crashes, ReplicaSet creates a replacement.
3. **Scaling:** ReplicaSet maintains the required replica count.
4. **Rolling Updates:** Deployment manages updates by creating and controlling ReplicaSets.
5. **Rollback:** Deployment can switch back to a previous ReplicaSet when an update fails.

### Interview / CKA Exam Answer

Deployment uses ReplicaSets to manage Pods indirectly. ReplicaSet maintains the desired number of Pods and provides self-healing and scaling. Deployment manages ReplicaSets to support rolling updates and rollbacks. This separation makes application updates and management easier.

## Important Commands

```bash
kubectl get deployments -o wide
kubectl get replicasets -o wide
kubectl get pods -o wide
kubectl describe deployment web-deploy
kubectl describe rs web-deploy-55b7476787
kubectl describe pod web-deploy-55b7476787-jgc9m
```

## Completion Checklist

- [x] Deployment inspected
- [x] ReplicaSet identified
- [x] Three Pods identified
- [x] Pod readiness verified
- [x] Deployment-to-ReplicaSet relationship identified
- [ ] ReplicaSet-to-Pod ownership confirmed using Controlled By
- [x] Deployment–ReplicaSet–Pod hierarchy understood
- [x] Reason for ReplicaSet explained

## Learning Outcome

Understood how Kubernetes uses Deployments and ReplicaSets to manage Pods, maintain desired replicas, perform self-healing, scaling, rolling updates and rollbacks.

**Status:** Partially verified — complete the remaining ownership checks before marking the question fully completed.

