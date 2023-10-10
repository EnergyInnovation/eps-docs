---
title:  "中国 (iGDP) 能源政策模型"
---

中国 (iGDP) 能源政策模型 (EPS) 是由[能源创新 (EI)](https://energyinnovation.org/)和[绿色创新发展研究院 (iGDP)](http://www.igdp.cn/)创建的免费、开源的计算机模型。它由EI最初创建的模型改编建立。

## 下载模型

您可以通过网络浏览器在本网站上使用中国 (iGDP) 能源政策模型。如果需要下载完整版本的模型，请通过[在线表格](https://wkf.ms/3hIh7YF)提交您的申请。

## 关于中国EPS不同版本的说明

EPS软件是免费、开源的，中国 (iGDP) EPS是利用公开数据建立的。它是两个中国国家级EPS之一。另一个模型是[中国 (NCSC) EPS](https://energypolicy.solutions/home/china/zh)，它包含一些专有输入数据，不提供下载。由于NCSC EPS使用的专有输入数据和iGDP EPS使用的公开输入数据不同，NCSC和iGDP版本的中国EPS模型结果有所不同。

## 鸣谢贡献者和审阅专家

我们在此感谢以下帮助我们编写和审阅中国能源政策模型的人员和专家。姓名按名字首字母排序。

* Jeffrey Rissman, Energy Innovation LLC
* 杨鹂, iGDP
* Lynn Price, Lawrence Berkeley National Laboratory
* Megan Mahajan, Energy Innovation LLC
* 陈美安, iGDP
* 胡敏, iGDP
* 邓敏姝, Energy Innovation LLC
* 周南, Lawrence Berkeley National Laboratory
* Nina Khanna, Lawrence Berkeley National Laboratory
* Olivia Ashmoore, Energy Innovation LLC
* Robbie Orvis, Energy Innovation LLC
* Todd Fincannon, Energy Innovation LLC
* 奚溪, iGDP

## 版本历史

### **3.4.7.1 - 2023年10月10日**

* 数据更新
  * 更新了 elec/BPMCCS 和 PMCCS 中的新增装机容量。
  * 通过调整 trans/AVL、BCDTRtSY、BMRESP 和 SoCDTtiNTY，校准了交通保有量和销量数据。
  * 根据世界银行的最新统计数据和经合组织的预测，更新了 io-model/BGDP 中的 GDP 数据。
  * 调整减慢了indst/BIFUbC 中钢铁和水泥能源消耗的削减速度，以更好地反映当前趋势。
* 网络应用数据更新
  * 更正了地区供热燃料转换政策杠杆的名称和描述，以便与之前更新的地区供热/RHFF 数据保持一致。


### **3.4.7 - 2023年7月26日**

* 模型平台从3.4.3更新到3.4.7
* 新功能
  * 电动汽车 (EV) 最低销量政策和氢能汽车 (Hydrogen Vehicle) 最低销量政策已被单一的零排放汽车 (ZEV) 标准政策所取代。可在trans/BVTQaZ和trans/VTQaZ中自定义哪些车辆技术符合ZEV标准，以适应不同的政策情景。EPS通过经济因素选择符合条件的车辆技术。新的ZEV标准政策仅适用于道路车辆，不适用于航空、铁路或船舶。
  * BAU情景ZEV标准可为多达60个子区域（如美国国家模型中的美国各州）单独指定，EPS将在未达ZEV标准地区增加ZEV销售，以满足BAU情景ZEV标准或用户指定的ZEV销量标准。这与使用全国销量加权平均值相比提高了准确性。
* 漏洞修复
  * 允许电力装机建设补贴变化影响电价。
  * 防止在ALLOCATE AVAILABLE函数中由于负的优先级值引起的少见的Vensim错误。
* 数据更新
  * 更新io-model/BPCiObIC为线性预测趋势。
  * 更新io-model/TLIM用中国数据替换美国数据。
  * 更新劳动生产率增长率，使其与io-model/LPGRbIC中的美国值趋同。
  * 对交通燃油经济性变量 BHNVFEAL、BNVFE 和 SYFAFE 做了小幅修正。
  * 更新dist-heat/RHFF中将煤炭转换为生物质和电力，而不是转换为生物质和氢能。

### **3.4.3.2 - 2023年5月17日**

* 漏洞修复
  * 修正fuels/BFPaT, elec/BGDPbES, indst/BPoIFUfE中公式错误。
* 数据更新
  * 更新校正elec/PMCCS以符合实际风光装机量。
  * 更新elec/ARpUIiRC为0，因为中国一般不会单纯因为经济原因自动提前退役煤电装机。
  * 在elec/ETS中将垃圾焚烧发电及水电的技术权重改分别改为0.1和1。
  * 调整elec/BHRbEF, elec/BPaFF, elec/BECF, fuels/BFPaT, elec/BDSBaPCF中关于煤的数据。
  * 调整elec/BECF以考虑风光的厂用电率
  * 调整政策情景中保障性调度、水电及核电的政策强制要求装机量和电动车部署相关政策设置。
  * 更新indst/BIFUbC方法学并将加工转换中的燃料损失包括在原料中。
  * 更新elec/BHRbEF数据源及方法学。
  * 燃气电厂保障性调度在elec/BGDPbES中调整为40%以避免过度发电。
  * 风电容量因子减少 (elec/BECF)。
  * elec/BPMCCS添加了2020年实际装机量。
  * 更新indst/BPoIFUfE，与indst/BIFUbC保持一致。
  * 更新数据源：hydgn/EHPpUC。
  * 考虑到现有碳市场配额均为免费，将fuels/BCTR全部设为0。
  * 修改fuels/BFPIaE中氢能相关系数

### **3.4.3.1 - 2023年2月6日**
* 漏洞修复
  * 修改政策要求的CCS的计算

### **3.4.3 - 2023年1月23日**

* 提高准确性
  * 燃料行业的BAU输出现在基于模型内部计算的燃料销量及价格而不是IO模型的输入数据，以此确保模型内部燃料收入估算的一致性。
  * 燃料行业的BAU就业及薪资现在基于燃料产量而非收入，避免就业及薪资受燃料价格影响而变动。
  * 政策影响的薪资变化现在与燃料产量挂钩，而非收入。
* 漏洞修复
  * 修改trans/BNVP公式错误。
* 数据更新
  * 更新fuels/FPIEBP, fuels/PoFDCtAE, indust/BIFUbC, 和 indst/BPoIFUfE以解决原油出口问题。
  
### **3.4.2 - 2022年10月10日**

* 第一次发布

## 软件许可

能源政策模型 (EPS) 根据GNU通用公共许可证第3版 (GPLv3) 或任何更高的版本发布，是免费的开源软件。 请参考[软件许可证](../software-license)页面，了解全部细节。

## 图片来源
Intricate Chinese Architectural design Of A Colorful Temple<br/>
Magda Ehlers<br/>
[https://www.pexels.com/photo/intricate-chinese-architectural-design-of-a-colorful-temple-2846001/](https://www.pexels.com/photo/intricate-chinese-architectural-design-of-a-colorful-temple-2846001/)<br/>
许可: Pexels License<br/>
修改： 图片已被裁剪，并在左侧进行了淡化处理。<br/>
