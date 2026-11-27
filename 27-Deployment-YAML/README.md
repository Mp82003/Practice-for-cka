# Q02. Create a Deployment Using YAML [Beginner]

## Objective

Create a Kubernetes Deployment using a YAML manifest with four identical NGINX replicas.

## Requirements

| Configuration | Value |
|---|---|
| API Version | apps/v1 |
| Kind | Deployment |
| Deployment Name | catalog-deploy |
| Container Name | catalog-container |
| Image | nginx:latest |
| Replicas | 4 |
| Namespace | default |

## Step 1: Create Deployment YAML

File: `deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: catalog-deploy
spec:
  replicas: 4
  selector:
    matchLabels:
      app: catalog
  template:
    metadata:
      labels:
        app: catalog
    spec:
      containers:
        - name: catalog-container
          image: nginx:latest
```

## Step 2: Understand Important Fields

**1. apiVersion**

Defines the Kubernetes API version used by the Deployment.

**2. replicas**

Specifies the desired number of Pods. Here, Kubernetes maintains four replicas.

**3. selector.matchLabels**

Identifies which Pods are managed by the Deployment.

**4. template**

Defines the blueprint used to create new Pods.

**5. template.metadata.labels**

Assigns labels to the Pods. These labels must match the Deployment selector.

**6. template.spec.containers**

Defines the containers that run inside each Pod, including container name and image.

## Step 3: Apply Deployment

```bash
kubectl apply -f deployment.yaml
```

## Step 4: Verify Deployment

```bash
kubectl get deployment
```

## Step 5: Verify ReplicaSet

```bash
kubectl get rs
```

## Step 6: Verify Pods

```bash
kubectl get pods -o wide
```

Expected: Four NGINX Pods in Running and Ready state.

## Step 7: Describe Deployment

```bash
kubectl describe deployment catalog-deploy
```

Check:
- Desired replicas: 4
- Available replicas: 4
- Selector: app=catalog

## Important Learning

- A Deployment manages ReplicaSets.
- A ReplicaSet maintains the desired number of Pods.
- A Pod template defines how new Pods should be created.
- A selector identifies the Pods managed by the Deployment.
- If a Pod is deleted, the ReplicaSet creates a replacement Pod to maintain the desired replica count.

## Completion Checklist

- [x] Correct API version
- [x] Deployment metadata configured
- [x] Four replicas configured
- [x] Selector configured
- [x] Pod template configured
- [x] Container and image configured
- [ ] Deployment successfully applied
- [ ] Four Pods verified Ready
- [ ] ReplicaSet verified

**Status:** YAML structure completed. Cluster verification pending.

