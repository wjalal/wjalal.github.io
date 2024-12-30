---
layout: page
title: Raytracing and Rasterization
description: A raytracing and rasterization pipeline implemented from scratch in C++ with OpenGL
img: assets/img/rtx.png
importance: 13
category: Academic
---

## Overview
This project implements a ray tracing pipeline to render realistic images of geometric shapes with appropriate illumination techniques. The process uses Phong lighting, recursive reflections, and efficient memory management. Bonus tasks include handling refractions through a prism.

## Features

- **Fully Controllable Camera**:
  - Navigate and rotate using keyboard controls.
  - Camera movements include forward, backward, up, down, tilt, and rotation.
- **Geometric Object Rendering**:
  - Supports spheres, triangles, and general quadratic surfaces.
  - Includes a checkerboard floor with customizable properties.
- **Illumination**:
  - Implements the Phong Lighting Model for realistic shading.
  - Handles shadows and recursive reflections up to a specified recursion level.
- **Scene Capture**:
  - Renders scenes as bitmap images with ray-object intersections.

---

## Input Details

### Scene Description (`scene.txt`)
- Describes objects and light sources in the environment.
- **Object Types**:
  - Sphere: Defined by center and radius.
  - Triangle: Defined by three vertices.
  - General Quadric Surface: Defined by a quadratic equation in 3D.
- **Light Types**:
  - Point Lights: Specified by position and color.
  - Spotlights: Include position, direction, color, and cutoff angle.

### Classes
- **Object Class** (Base):
  - Common attributes like color, coefficients, and shininess.
  - Virtual methods like `draw()` and `intersect()`.
- **Derived Classes**:
  - Sphere, Triangle, Floor, General Quadric Surface.
  - Each overrides `draw()` and implements its version of `intersect()`.
- **Lighting Classes**:
  - `PointLight` and `SpotLight` with necessary properties for illumination.

---

## Implementation Details

### 1. **Camera Controls**

- **Keyboard Mapping**:

  | Key         | Function              |
  |-------------|-----------------------|
  | Up Arrow    | Move forward          |
  | Down Arrow  | Move backward         |
  | Left Arrow  | Move left             |
  | Right Arrow | Move right            |
  | PageUp      | Move up               |
  | PageDown    | Move down             |
  | 1/2         | Rotate/look left/right|
  | 3/4         | Look up/down          |
  | 5/6         | Tilt clockwise/counterclockwise |

### 2. **Illumination with Phong Model**
- Computes ambient, diffuse, and specular components for each light source.
- Considers shadow rays and surface properties like shininess and reflection coefficients.

### 3. **Recursive Reflections**
- Rays are recursively reflected up to a specified recursion depth (`recursion_level`).
- Handles color blending from reflected rays using surface reflection coefficients.

### 4. **Rasterization and Bitmap Generation**
- Scene is rasterized onto a 2D grid.
- Each pixel's color is determined by the closest intersected object using ray-object intersection.
- Captured images are saved as `.bmp` files with unique names.

---

## Instructions to Run

[https://github.com/wjalal/4-1/tree/main/10/F3](https://github.com/wjalal/4-1/tree/main/10/F3)

### 1. Prerequisites
- OpenGL and GLUT installed.
- Basic understanding of ray tracing, illumination models, and vector mathematics.

### 2. Compiling the Code
- Ensure source files are prefixed with your student ID (e.g., `1905XXX_Main.cpp`).
- Include any custom headers (e.g., `1905XXX_Classes.h`).
- Compile using:
  ```
  g++ -o ray_tracer 1905XXX_Main.cpp -lGL -lGLU -lglut
  ```

### 3. Running the Program
- Execute the compiled program:
  ```
  ./ray_tracer
  ```
- Interact using camera controls.
- Press `0` to capture a scene and save as a bitmap image.

---

## Sample Scene File (`scene.txt`)
```
# Sphere: center(x, y, z), radius, color(r, g, b), coefficients(ka, kd, ks, kr), shininess
Sphere 0 0 -50 10 1 0 0 0.5 0.4 0.3 0.5 10

# PointLight: position(x, y, z), color(r, g, b)
PointLight 50 50 50 1 1 1
```