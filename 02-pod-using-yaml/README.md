# Q02 – Create a Pod Using YAML Manifest

## Objective
Create a Kubernetes Pod named `httpd-pod` using a declarative YAML manifest.

## Requirements
- Create a YAML manifest named `httpd-pod.yaml`.
- Use the core API version `v1`.
- Set the resource kind to `Pod`.
- Pod name: `httpd-pod`.
- Container name: `httpd-container`.
- Container image: `httpd:latest`.
- Apply the manifest using `kubectl apply`.
- Verify the Pod using `kubectl get` and `kubectl describe`.

## Environment
- OS: Ubuntu (WSL2)
- Kubernetes Cluster: Minikube
- Tool: kubectl
- Namespace: default

## Implementation

### 1. Create YAML Manifest

Created `httpd-pod.yaml` with the required Pod configuration.

### 2. Apply Manifest

```bash
kubectl apply -f httpd-pod.yaml
```

### 3. Verify Pod Status

```bash
kubectl get pod httpd-pod
```

### 4. Inspect Pod Details

```bash
kubectl describe pod httpd-pod
```

## Troubleshooting

Initially, the Pod encountered:

`ImagePullBackOff`

The Pod events showed:
- ErrImagePull
- BackOff
- ImagePullBackOff
- Image pull operation was cancelled (`context canceled`)

Minikube components were checked using:

```bash
minikube status
```

The cluster components were Running. On subsequent verification, the Pod successfully started.

## Final Verification

```text
NAME        READY   STATUS    RESTARTS
httpd-pod   1/1     Running   0
```

## Final Result

- Pod Name: httpd-pod
- Namespace: default
- Container Name: httpd-container
- Image: httpd:latest
- Ready: 1/1
- Status: Running

**Status: Completed ✅**

## Key Learnings

1. Understanding Kubernetes Pod YAML structure.
2. Difference between imperative and declarative Pod creation.
3. Understanding `apiVersion`, `kind`, `metadata`, and `spec`.
4. Container lists and YAML indentation.
5. Troubleshooting `ImagePullBackOff` and inspecting Pod events.
6. Verifying Pod readiness and status.

---

*Part of my Kubernetes and CKA hands-on practice journey.*
