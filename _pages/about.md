---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. student in Robotics at Georgia Tech, bringing **6+ years of industry experience** in autonomous driving — leading the Mapping and Localization team at HoloMatic through production Autonomous Valet Parking and Highway Pilot deployments, with hands-on depth in state estimation, perception, and multi-sensor fusion for real robots (see [Work Experience](#-work-experience)). My research extends that engineering foundation into **task-driven, computationally-efficient SLAM** for long-term robot autonomy, and has grown my expertise in the directions increasingly central to robotics perception today: 3D Gaussian Splatting and neural scene representations, and foundation models for SLAM.

<span style="color:#FF0000; font-weight:600;">
Open to **full-time** Perception/Robotics roles and Spring 2027 **research internships** — feel free to reach out.
</span>


# 🛠 Technical Skills

- **Localization & SLAM**: Visual & LiDAR SLAM, VIO, Multi-Sensor Fusion, Factor Graphs
- **Perception & CV**: 3D Reconstruction, Feature Matching, Sensor Calibration
- **Machine Learning**: PyTorch, Learned Feature Matching (SuperPoint/LightGlue)
- **Software & Tools**: C++, Python, ROS/ROS2, GTSAM, Ceres, OpenCV
- **Domains**: Autonomous Driving, Mobile & Legged Robotics

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

<!-- 
# 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 💻 Work Experience

- *2026.05 - 2026.08*, **Software Engineering Intern, Mapping and Localization**, General Motors, Mountain View, CA
  - LiDAR mapping/localization and place recognition for autonomous mobile robots on embedded hardware.
- *2017.07 - 2021.12*, **Senior Research Engineer — Team & Project Lead, Mapping and Localization**, HoloMatic Inc.
  - Led delivery of production AVP and Highway Pilot systems (visual/LiDAR mapping, VIO, multi-sensor fusion, Semantic SLAM), achieving ~10cm APE/RPE competitive with top-5 KITTI results.
  - Enforced automotive-grade, safety-critical C++ standards (MISRA/AUTOSAR-style) across the production codebase.
- *2016.06 - 2017.06*, **Software Engineer, Autonomous Driving**, LeEco Inc.
  - Camera calibration and stereo visual odometry for a production perception stack.
- *2015.08 - 2016.05*, **Senior Research Engineer, Robotics**, Institute of Deep Learning (IDL), Baidu Inc.
  - Unified camera/LiDAR/IMU calibration framework and global path planning for aerial/ground autonomy.
- *2014.06 - 2015.07*, **Robotics Specialist**, PRECISE Center, University of Pennsylvania
  - Vision-based localization and uncertainty-aware planning, including an EKF-VIO system on AR.Drone/MAGIC platforms.

# 📖 Education
- *2022.01 - now*,       PhD in Robotics, IRIM, Georgia Institute of Technology.
- *2012.09 - 2014.05*,   MS in Robotics, GRASP Lab, University of Pennsylvania.
- *2008.09 - 2012.07*,   BS in Mechanical Engineering, Northeastern University (CHINA).

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications 

<!-- GoodWeights -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2026 Accepted</div><video src='images/ICRA2026/GW_demo.mp4' poster='images/ICRA2026/GW_demo_poster.jpg' width="100%" controls loop muted playsinline></video></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Good Weights: Proactive, Adaptive Dead Reckoning Fusion for Continuous and Robust Visual SLAM 

[**Author**] **Yanwei Du**, Jing-Chen Peng, Patricio A. Vela.

Adaptively fuses dead reckoning with visual SLAM for continuous, robust pose tracking when visual tracking is unreliable.

<details markdown="1"><summary>Details</summary>

The Good Weights algorithm described here provides a framework
to adaptively integrate dead reckoning (DR) with passive
visual SLAM for continuous and accurate frame-level pose
estimation. Importantly, it describes how all modules in a
comprehensive SLAM system must be modified to incorporate
DR into its design. Adaptive weighting increases DR influence
when visual tracking is unreliable and reduces when visual
feature information is strong, maintaining pose track without
overreliance on DR.

</details>

[Paper](https://arxiv.org/abs/2509.22910)&nbsp;&nbsp;&nbsp;&nbsp;
<!-- [Code](https://github.com/ivalab/task_driven_slam_benchmarking.git)&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- [Result](https://github.com/ivalab/task_driven_slam_benchmarking/tree/main/media/results/realworld) -->

</div>
</div>

<!-- TaskDrivenSLAMBenchmarking -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IROS 2025 Accepted</div><video src='images/IROS2025/taskbench_demo.mp4' poster='images/IROS2025/taskbench_demo_poster.jpg' width="100%" controls loop muted playsinline></video></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Task-Driven SLAM Benchmarking for Robot Navigation

[**Author**] **Yanwei Du**, Shiyu Feng, Carlton G. Cort, Patricio A. Vela.

A benchmarking framework that evaluates SLAM methods by task-relevant mapping precision rather than raw trajectory accuracy.

<details markdown="1"><summary>Details</summary>

This work proposes a benchmarking framework for evaluating SLAM methods.
The framework accounts for SLAM's mapping capabilities, employs precision as a key metric. 
The benchmarking approach offers a more relevant and accurate assessment of SLAM performance in task-driven applications.

</details>

[Paper](https://arxiv.org/abs/2409.16573)&nbsp;&nbsp;&nbsp;&nbsp;
[Code](https://github.com/ivalab/task_driven_slam_benchmarking.git)&nbsp;&nbsp;&nbsp;&nbsp;
[Result](https://github.com/ivalab/task_driven_slam_benchmarking/tree/main/media/results/realworld)

</div>
</div>


<!-- GoodGraph -->
<div class='paper-box'><div class='paper-box-image'><div style="display:flex; flex-direction:column; gap:8px;"><div class="badge badge--muted">Internal Review</div><img src='images/GoodGraph/GG_selection.JPG' alt="sym" width="100%"><img src='images/GoodGraph/GG_performance.JPG' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Good Graph: Budget-Aware Bundle Adjustment in Visual SLAM

[**Author**] **Yanwei Du**, Yipu Zhao,  Justin S. Smith, Patricio A. Vela.

Caps Visual SLAM back-end optimization cost while preserving conditioning, keeping the tracking thread's map accurate and real-time under a compute budget.

<details markdown="1"><summary>Details</summary>

Good Graph is designed to address the critical challenge of computational cost in Visual SLAM back-end optimization.
By intelligently capping the problem size while preserving the conditioning of the optimization, 
it ensures that the back-end remains efficient without sacrificing accuracy. 
This approach guarantees that the tracking thread receives an up-to-date and accurate map in real time, 
especially in budget-critical case, thereby enhancing both the accuracy and robustness of the overall Visual SLAM system.

</details>

<!-- [Paper](https://arxiv.org/abs/2409.16573)&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- [Code](https://github.com/ivalab/task_driven_slam_benchmarking.git)&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- [Result](https://github.com/ivalab/task_driven_slam_benchmarking/tree/main/media/results/realworld) -->

</div>
</div>

<!-- ROMDP_UAV -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACC 2016 Accepted</div><img src='images/ACC2016/romdp_quadrotor.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] A Stochastic Approach for Attack Resilient UAV Motion Planning

[**Author**] Nicola Bezzo, James Weimer, **Yanwei Du**, Oleg Sokolsky, Sang H. Son, Insup Lee.

A stochastic motion-planning strategy (Redundant Observable MDPs) for UAVs with unreliable sensor measurements.

<details markdown="1"><summary>Details</summary>

This work proposes a stochastic strategy named 
Redundant Observable MDPs(ROMDPs) for motion planning of unmanned 
aerial vehicles (UAVs) subject to unreliable sensors measurements.

</details>

[Paper](https://ieeexplore.ieee.org/abstract/document/7525108)

</div>
</div>

# 💬 Research Statement

Simultaneous Localization and Mapping (SLAM) has traditionally been judged by how accurately it reconstructs a scene, with much of the field chasing ever-finer mapping and localization precision. But for a robot executing a task — navigating a warehouse aisle, following a lane, reaching for an object — what matters is **repeatability**, **reliability**, and **task success**, not sub-millimeter accuracy for its own sake. This distinction motivates a shift from accuracy-driven SLAM to **task-driven SLAM**: systems designed around what the task actually demands of the estimator, rather than a generic accuracy benchmark.

My research pursues this through **hierarchical, task-driven** estimation, in which multiple estimation modules are tuned to different objectives rather than one estimator being optimized against a single fixed accuracy target. A coarse **topological localization** layer supplies efficient, high-level location estimates for long-range navigation and situational awareness, while a **local environment sensing** layer provides the fine-grained feedback that close-quarters tasks — obstacle avoidance, manipulation — actually require. Letting each layer specialize, rather than forcing one estimator to do both jobs at full precision everywhere, yields a system that adapts its robustness/efficiency tradeoff to the task at hand while keeping computation bounded.

This direction is informed directly by my experience deploying safety-critical SLAM in automotive environments, where computational budget and reliability were hard constraints, not afterthoughts. Looking ahead, I am extending this task-driven framework toward emerging representations — 3D Gaussian Splatting and neural scene models — and foundation models for SLAM, asking the same question of these newer tools: not simply how accurate can they be, but how well do they serve the task a robot is actually trying to accomplish, under real computational limits. The goal is robust, scalable systems capable of long-term autonomy in practical, resource-constrained deployments.

<!-- The necessity for such a design perspective stems directly from the requirements of task execution. For example:

In Open Spaces: High mapping accuracy is often unnecessary. Instead, the system's robustness in ensuring collision-free navigation is more critical. A coarse localization and map suffice as long as obstacles are avoided.

For Lane-Following Vehicles: In structured environments such as roads, SLAM systems need to provide fast, localized feedback with minimal computational overhead. Sparse features and local environmental cues enable the vehicle to maintain its trajectory along lanes effectively, with limited reliance on detailed maps.

In Fine-Grained Execution Tasks: Tasks requiring precision, such as robotic manipulation or clustering operations, demand accurate state estimation. Here, SLAM systems must shift to provide finer-grained localization and mapping to meet the task’s precision requirements. -->

<!-- 📄 Resume -- not attached yet, revising content. Uncomment heading + nav entry (_data/navigation.yml) once PDFs are in files/:
# 📄 Resume

📄 [Resume (industry-focused, PDF)](files/duyanwei_resume.pdf) &nbsp;&nbsp;•&nbsp;&nbsp; [CV (academic, PDF)](files/duyanwei_cv.pdf)
-->

# 🤖 Robotic Platforms

<div class='paper-box'><div class='paper-box-image'><div><img src='images/turtlebot_real.jpg' alt="sym" width="100%" style="max-width:260px;"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Custom TurtleBot-Based SLAM Platform

[**Description**]
I design and build custom ground-robot platforms based on the TurtleBot, outfitted with a Velodyne LiDAR, stereo/RGB-D cameras, and a monocular camera on a custom sensor mast, which I integrate and calibrate for closed-loop SLAM evaluation. These platforms serve as the real-robot testbed for my published work, including the [Task-Driven SLAM Benchmarking](#-publications) framework (IROS 2025).

</div>
</div>

<!-- RESERVED: LiDAR mapping demo card. Drop in images/Robots/turtlebot_mapping.gif (point cloud building live) and/or images/Robots/turtlebot_map.jpg (top-down finished-map screenshot), then uncomment:
<div class='paper-box'><div class='paper-box-image'><div><img src='images/Robots/turtlebot_mapping.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] LiDAR Mapping with the TurtleBot Platform

[**Description**]
[fill in once assets are in]

</div>
</div>
-->

