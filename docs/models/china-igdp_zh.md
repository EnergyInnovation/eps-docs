---
title:  "中国能源政策模型（2022，iGDP）"
---

中国能源政策模型（2022，iGDP）基于[能源创新： 政策和技术有限责任公司（EI）](https://energyinnovation.org/)开发的能源政策模型（EPS）框架，是
由[绿色创新发展研究院（iGDP）](http://www.igdp.cn/)和EI联合开发的免费、开源模型。

## 下载模型

您可以通过网络浏览器在本网站上使用中国EPS（2022，iGDP）。如果需要下载完整版本的模型，请通过[此表格](https://wkf.ms/3hIh7YF)提交申请。

## 致谢
中国EPS（2022，iGDP）由EI与iGDP联合开发，是两个中国国家EPS模型之一。

特别感谢以下专家对EPS模型在中国应用做出贡献。排名以名字首字母排序。

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
* 奚溪, iGDP

## 版本历史

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
  * 风电容量因子减少（elec/BECF）。
  * elec/BPMCCS添加了2020年实际装机量。
  * 更新indst/BPoIFUfE，与indst/BIFUbC保持一致.
  * 更新数据源：hydgn/EHPpUC。
  * 考虑到现有碳市场配额均为免费，将fuels/BCTR全部设为0。
  * 修改fuels/BFPIaE中氢能相关系数

### **3.4.3.1 - 2023/2/6**
* 漏洞修复
  * 修改政策要求CCS的计算

### **3.4.3 - 2023/1/23**

* 提高准确性
  * 燃料行业的BAU输出现在基于模型内部计算的燃料销量及价格而不是IO模型的输入数据，以此确保模型内部燃料收入估算的一致性。
  * 燃料行业的BAU就业及薪资现在基于燃料产量而非收入，避免就业及薪资受燃料价格影响而变动。
  * 政策影响的薪资变化现在与燃料产量挂钩，而非收入。
* 漏洞修复
  * 修改trans/BNVP公式错误。
* 数据更新
  * 更新fuels/FPIEBP, fuels/PoFDCtAE, indust/BIFUbC, 和 indst/BPoIFUfE以解决原油出口问题。
  
### **3.4.2 - 2022/10/10**

* 第一次发布

## 软件许可

能源政策模型（EPS）根据GNU通用公共许可证第3版（GPLv3）或任何更高的版本发布，是免费的开源软件。 请参考[软件许可证](.../software-license)页面，了解全部细节。

## 图片来源
Intricate Chinese Architectural design Of A Colorful Temple<br/>
Magda Ehlers<br/>
[https://www.pexels.com/photo/intricate-chinese-architectural-design-of-a-colorful-temple-2846001/](https://www.pexels.com/photo/intricate-chinese-architectural-design-of-a-colorful-temple-2846001/)<br/>
许可: Pexels License<br/>
修改： 图片已被裁剪，并在左侧进行了淡化处理。<br/>
