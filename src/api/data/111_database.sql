/*
Navicat MySQL Data Transfer

Source Server         : H5-1705
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 111_database

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-09-29 13:10:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for indexgoods
-- ----------------------------
DROP TABLE IF EXISTS `indexgoods`;
CREATE TABLE `indexgoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL COMMENT '商品图片地址',
  `describes` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `price` decimal(10,1) DEFAULT NULL COMMENT '商品价格',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexgoods
-- ----------------------------
INSERT INTO `indexgoods` VALUES ('1', 'img/indexGoods1_1.jpg', '【保心良药】益安宁丸', '790.0');
INSERT INTO `indexgoods` VALUES ('2', 'img/indexGoods1_2.jpg', '【咽喉肿痛】板蓝根颗粒', '10.5');
INSERT INTO `indexgoods` VALUES ('3', 'img/indexGoods1_3.jpg', '【养生佳品】东阿阿胶', '1199.0');
INSERT INTO `indexgoods` VALUES ('4', 'img/indexGoods1_4.jpg', '【温阳固本】肾宝片', '322.0');
INSERT INTO `indexgoods` VALUES ('5', 'img/indexGoods1_5.jpg', '【补肾益精】百令胶囊', '40.0');
INSERT INTO `indexgoods` VALUES ('6', 'img/indexGoods2_1.jpg', '【乙肝】博路定', '199.0');
INSERT INTO `indexgoods` VALUES ('7', 'img/indexGoods2_2.jpg', '【脱发】蔓迪', '139.0');
INSERT INTO `indexgoods` VALUES ('8', 'img/indexGoods2_3.jpg', '【保肝护肝】护肝片', '31.0');
INSERT INTO `indexgoods` VALUES ('9', 'img/indexGoods2_4.jpg', '【阳痿】万艾可', '113.0');
INSERT INTO `indexgoods` VALUES ('10', 'img/indexGoods2_5.jpg', '【补气血】东阿阿胶', '868.0');
INSERT INTO `indexgoods` VALUES ('11', 'img/indexGoods3_1.jpg', '鱼跃 上臂式家用电子血压计YE660D 血压仪 高血压仪', '129.0');
INSERT INTO `indexgoods` VALUES ('12', 'img/indexGoods3_2.jpg', '欧姆龙 智能上臂式电子血压计 HEM-7051 高血压仪', '259.0');
INSERT INTO `indexgoods` VALUES ('13', 'img/indexGoods3_3.jpg', '强生 稳豪型血糖试纸50片含50支采血针', '169.0');
INSERT INTO `indexgoods` VALUES ('14', 'img/indexGoods3_4.jpg', '诺斯清 生理海水鼻腔护理喷雾器 80ml', '69.0');
INSERT INTO `indexgoods` VALUES ('15', 'img/indexGoods3_5.jpg', '70支多送7支】国产新优锐bd胰岛素注射笔针头0.23*4mm32G*10包 一次性无菌针头 [五切面针头]', '147.0');
INSERT INTO `indexgoods` VALUES ('16', 'img/indexGoods4_1.jpg', '【水润高清】博士伦 清朗水润高清日抛 30片装', '128.0');
INSERT INTO `indexgoods` VALUES ('17', 'img/indexGoods4_2.jpg', '【长效保湿】强生 舒日日抛 30片装', '158.0');
INSERT INTO `indexgoods` VALUES ('18', 'img/indexGoods4_3.jpg', '【硅水凝胶】库博 佰视明月抛 3片装', '139.0');
INSERT INTO `indexgoods` VALUES ('19', 'img/indexGoods4_4.jpg', '【硅水凝胶】视康 舒视氧隐形眼镜月抛 6片装 特价', '128.0');
INSERT INTO `indexgoods` VALUES ('20', 'img/indexGoods4_5.jpg', '【热销款】博士伦 润明清透2+1优惠装355ml+355ml+120ml', '78.0');
INSERT INTO `indexgoods` VALUES ('21', 'img/indexGoods5_1.jpg', '汤臣倍健蛋白质粉150g*3罐共450g 蛋白质粉正品含大豆蛋白粉乳清蛋白粉成人中老年保健品健身增肌粉', '128.0');
INSERT INTO `indexgoods` VALUES ('22', 'img/indexGoods5_2.jpg', '千年生工 阿胶片阿胶块 240g 赠打粉机', '268.0');
INSERT INTO `indexgoods` VALUES ('23', 'img/indexGoods5_3.jpg', '禾博士 氨糖软骨素加钙片 1.0g*60片 补钙增强骨密度', '69.0');
INSERT INTO `indexgoods` VALUES ('24', 'img/indexGoods5_4.jpg', '同仁堂 破壁灵芝孢子粉胶囊 0.35g*90粒 含灵芝三萜', '980.0');
INSERT INTO `indexgoods` VALUES ('25', 'img/indexGoods5_5.jpg', '修正 左旋肉碱茶多酚片 0.8g*70片 减肥瘦身', '59.0');
INSERT INTO `indexgoods` VALUES ('26', 'img/indexGoods6_1.jpg', '新盖中盖牌高钙片 2.5g/片*110片*2瓶套餐 成人中老年人补钙片 高钙 成人男女士补钙青少年钙咀嚼片', '119.0');
INSERT INTO `indexgoods` VALUES ('27', 'img/indexGoods6_2.jpg', '汤臣倍健 液体钙软胶囊200粒*2瓶优惠装', '119.0');
INSERT INTO `indexgoods` VALUES ('28', 'img/indexGoods6_3.jpg', '斯利安 叶酸片 0.4mg*93片', '69.0');
INSERT INTO `indexgoods` VALUES ('29', 'img/indexGoods6_4.jpg', '【科学补钙】惠氏 钙尔奇 碳酸钙D3片 60片', '45.0');
INSERT INTO `indexgoods` VALUES ('30', 'img/indexGoods6_5.jpg', '卡奇尔 维D2磷葡钙片 90片', '85.0');
INSERT INTO `indexgoods` VALUES ('31', 'img/indexGoods7_1.jpg', '【4支家庭装】云南白药牙膏薄荷香型210g*4支', '108.0');
INSERT INTO `indexgoods` VALUES ('32', 'img/indexGoods7_2.jpg', 'SHVYOG 舒友阁去黑头护理套装 黑头导出鼻膜贴+竹炭去黑头鼻膜棒+毛孔细嫩收敛水', '49.0');
INSERT INTO `indexgoods` VALUES ('33', 'img/indexGoods7_3.jpg', '【草本护肤】百雀羚 水嫩倍现臻美套装（洁面乳95g+盈透精华水100ml+精华乳液100ml+隔离乳40g）', '108.0');
INSERT INTO `indexgoods` VALUES ('34', 'img/indexGoods7_4.jpg', '自然堂 水霜套装组合（柔肤水 保湿霜）', '117.8');
INSERT INTO `indexgoods` VALUES ('35', 'img/indexGoods7_5.jpg', '【妇用抗菌】施法迪 抗菌凝胶 3g*3支', '58.0');
INSERT INTO `indexgoods` VALUES ('36', 'img/indexGoods8_1.jpg', '杜蕾斯 避孕套 男用 安全套34片 （活力12片+love10片+亲昵12片）', '69.0');
INSERT INTO `indexgoods` VALUES ('37', 'img/indexGoods8_2.jpg', '米奥 免洗避孕套 男用玻尿酸安全套 润滑透明质酸保险套透明质酸水膜 12只', '49.0');
INSERT INTO `indexgoods` VALUES ('38', 'img/indexGoods8_3.jpg', '古圣堂印度神油喷剂男用印度神油送杜蕾斯润滑+神油湿巾', '79.0');
INSERT INTO `indexgoods` VALUES ('39', 'img/indexGoods8_4.jpg', '【1药网自营】cob葵司口交款紫色 震动飞机杯 AV女优签名版成人情趣用品 男用娃娃夹吸抽插震动倒模名器自慰飞机杯', '99.0');
INSERT INTO `indexgoods` VALUES ('40', 'img/indexGoods8_5.jpg', '大卫 2个月优孕套装（排卵试纸30条+早孕10条+40尿杯）', '29.9');
INSERT INTO `indexgoods` VALUES ('41', 'img/indexGoods9_1.jpg', 'Friso/美素佳儿 GOLD金装 幼儿配方奶粉 3段 900g/听 新升级', '185.0');
INSERT INTO `indexgoods` VALUES ('42', 'img/indexGoods9_2.jpg', '美赞臣MeadJohnson安儿健4段儿童配方奶粉900g', '122.0');
INSERT INTO `indexgoods` VALUES ('43', 'img/indexGoods9_3.jpg', '余仁生 婴儿魔力紫草膏10g驱蚊防蚊虫叮咬抑菌止痒改善小宝宝红屁股', '9.9');
INSERT INTO `indexgoods` VALUES ('44', 'img/indexGoods9_4.jpg', '宝宝金水360ml草本原液套装 婴儿花露水宝宝驱蚊水喷雾儿童止痒', '69.9');
INSERT INTO `indexgoods` VALUES ('45', 'img/indexGoods9_5.jpg', '乳糖酶不耐症滴剂 15.5ml（缓解腹泻、腹胀气、腹部不适）【海外购】', '213.0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL COMMENT '用户手机号',
  `password` varchar(255) NOT NULL COMMENT '密码',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('17', '13413611594', 'd0dcbf0d12a6b1e7fbfa2ce5848f3eff');
INSERT INTO `user` VALUES ('18', '13413611593', 'dc58a1526e08adcd7a1fc9edc6a95515');
INSERT INTO `user` VALUES ('19', '15914343143', '78302615c8b79cac8df6d2607f8a83ee');
INSERT INTO `user` VALUES ('20', '13824848949', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('21', '13899272332', 'e10adc3949ba59abbe56e057f20f883e');
SET FOREIGN_KEY_CHECKS=1;
