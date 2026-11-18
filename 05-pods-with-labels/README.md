# Q05 – Create Pods with Labels

## Objective
Create three Kubernetes Pods using YAML manifests with specific names, container images, and labels. All Pods are required to be in the `default` namespace.

## Requirements

| Pod Name | Container Image | app Label | env Label |
|---|---|---|---|
| pod-1 | nginx:latest | nginx | dev |
| pod-2 | nginx:latest | nginx | prod |
| pod-3 | httpd:latest | httpd | dev |

## Project Structure

```text
05-pods-with-labels/
│
├── pod-1.yaml
├── pod-2.yaml
├── pod-3.yaml
└── README.md
```

## YAML Concepts Used

- `apiVersion`: Defines the Kubernetes API version.
- `kind`: Specifies the resource type (Pod).
- `metadata`: Contains the Pod name and labels.
- `labels`: Used to identify and group Kubernetes resources.
- `spec`: Defines the desired state of the Pod.
- `containers`: Specifies the containers running inside the Pod.
- `image`: Defines the container image.

## Deployment Commands

Apply the YAML manifests:

```bash
kubectl apply -f pod-1.yaml
kubectl apply -f pod-2.yaml
kubectl apply -f pod-3.yaml
```

## Verification Commands

Check all Pods:

```bash
kubectl get pods
```

Verify labels:

```bash
kubectl get pods --show-labels
```

Filter Pods using labels:

```bash
kubectl get pods -l app=nginx
```

Filter development environment Pods:

```bash
kubectl get pods -l env=dev
```

Filter using multiple labels:

```bash
kubectl get pods -l app=nginx,env=dev
```

## Important Learning Points

1. Kubernetes labels use YAML key-value syntax (`key: value`).
2. Labels help identify and group Kubernetes resources.
3. Label selectors help filter Pods.
4. `kubectl apply -f` creates or updates resources using YAML manifests.
5. Pod names must be unique within a namespace.

## Troubleshooting

During this exercise, an existing ReplicaSet named `nginx-rs` was found in the default namespace.

Its selector used:

```yaml
selector:
  matchLabels:
    app: nginx
```

The new Pods also used `app: nginx`, resulting in a selector conflict. Kubernetes events showed that the ReplicaSet deleted the newly created Pods.

**Note:** Existing workloads should not be deleted or modified just to complete this exercise.

## Expected Result

All three Pods should be in the `default` namespace and reach `1/1 Ready` status with their exact requested labels.

## Status

- YAML manifests: Created
- Label configuration: Completed
- Pod deployment: Pending successful verification
- Final readiness verification: Pending

