-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 24, 2012 at 02:55 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kotorbay`
--

-- --------------------------------------------------------

--
-- Table structure for table `bkbadds`
--

CREATE TABLE IF NOT EXISTS `bkbadds` (
  `amname` text,
  `amimages` text,
  `amlink2` text,
  `amownbaner` text,
  `amheight` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bkbadds`
--

INSERT INTO `bkbadds` (`amname`, `amimages`, `amlink2`, `amownbaner`, `amheight`) VALUES
('adds1', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C4%7C--%7C', 'http%3A%2F%2Fwww.blabla.com', '1', 150),
('adds2', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Hydrangeas.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C', 'http%3A%2F%2Fwww.blabla.com', '2', 150),
('adds3', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Penguins.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Tulips.jpg%7C--%7C4%7C--%7C', 'http%3A%2F%2Fwww.blabla.com', '3', 150),
('adds4', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Jellyfish.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_world-panoramas-scenery-widescreen-wallpaper-1.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_4chan-w1299606937731.jpg%7C--%7C4%7C--%7C', 'http%3A%2F%2Fwww.blabla.com', '4', 150),
('adds5', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_680_size_1024x600_1133-1680x1050.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_great-white-shark-wallpapers-1024-600.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_growing-aurora-wallpaper-pack1.jpg%7C--%7C4%7C--%7C', 'http%3A%2F%2Fwww.blab34la.com', '7', 200);

-- --------------------------------------------------------

--
-- Table structure for table `events_eng`
--

CREATE TABLE IF NOT EXISTS `events_eng` (
  `emlang` text,
  `emname` text,
  `emMainImg` text,
  `emtext` text,
  `emimages` text,
  `emvideolinx` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `events_eng`
--

INSERT INTO `events_eng` (`emlang`, `emname`, `emMainImg`, `emtext`, `emimages`, `emvideolinx`) VALUES
('eng', 'ide%20zmaj', '../../images/thumb/thumb_1024x768-free-wallpaper.jpg', 'wefhsfsd%20%0A%20d%0Af%20dfg%20dfg%20dufhg%20dugh%20dfigu%20dfigu%20dfgiu%20hdf%0A%0Awefhsfsd%20%0A%20d%0Af%20dfg%20dfg%20dufhg%20dugh%20dfigu%20dfigu%20dfgiu%20hdfwefhsfsd%20%0A%20d%0Af%20dfg%20dfg%20dufhg%20dugh%20dfigu%20dfigu%20dfgiu%20hdf', '%7C--%7C1%7C--%7C../../images/thumb/thumb_652_size_1024x600_955-1600x1200.jpg%7C--%7C2%7C--%7C../../images/thumb/thumb_5601175300_0f1d73ffe8.jpg%7C--%7C3%7C--%7C../../images/thumb/thumb_great-white-shark-wallpapers-1024-600.jpg%7C--%7C4%7C--%7C../../images/thumb/thumb_1024x768-free-wallpaper.jpg%7C--%7C5%7C--%7C../../images/thumb/thumb_384351_10150386129726852_377366401851_8724556_1904490812_n.jpg%7C--%7C6%7C--%7C../../images/thumb/thumb_wall1.png%7C--%7C7%7C--%7C', '%7C--%7C1%7C--%7Chttp://www.youtube.com/embed/tdegXjw5TKk%7C--%7C2%7C--%7C'),
('eng', 'asd1', '..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C', ''),
('eng', 'asd12', '..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C', ''),
('eng', 'asd123', '..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C', ''),
('eng', 'asd1234', '..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C7%7C--%7C', ''),
('eng', 'asd12345', '..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C7%7C--%7C', ''),
('eng', 'asd123456', '..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C7%7C--%7C', ''),
('eng', 'asd1234567', '..%2F..%2Fimages%2Fthumb%2Fthumb_image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C7%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg%7C--%7C8%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_21082011.jpg%7C--%7C9%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg%7C--%7C10%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg%7C--%7C11%7C--%7C', ''),
('eng', 'asd12345678', '..%2F..%2Fimages%2Fthumb%2Fthumb_21082011.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C7%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg%7C--%7C8%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_21082011.jpg%7C--%7C9%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg%7C--%7C10%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg%7C--%7C11%7C--%7C', ''),
('eng', 'asd123456789', '..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C7%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg%7C--%7C8%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_21082011.jpg%7C--%7C9%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg%7C--%7C10%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg%7C--%7C11%7C--%7C', ''),
('eng', 'asd12345678910', '..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg', 'sdcsc', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg%7C--%7C7%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg%7C--%7C8%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_21082011.jpg%7C--%7C9%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg%7C--%7C10%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg%7C--%7C11%7C--%7C', '');

-- --------------------------------------------------------

--
-- Table structure for table `events_rus`
--

CREATE TABLE IF NOT EXISTS `events_rus` (
  `emlang` text,
  `emname` text,
  `emMainImg` text,
  `emtext` text,
  `emimages` text,
  `emvideolinx` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `events_yug`
--

CREATE TABLE IF NOT EXISTS `events_yug` (
  `emlang` text,
  `emname` text,
  `emMainImg` text,
  `emtext` text,
  `emimages` text,
  `emvideolinx` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `events_yug`
--

INSERT INTO `events_yug` (`emlang`, `emname`, `emMainImg`, `emtext`, `emimages`, `emvideolinx`) VALUES
('yug', 'asdwer', '../../images/thumb/thumb_3437782039_01b4045c0f.jpg', 'asdf%20er%20f%20fr%20evf%20ff%0A%20%0Afv%0Af%0Av%0A%20f%0Av%20%0A', '%7C--%7C1%7C--%7C../../images/thumb/thumb_21082011.jpg%7C--%7C2%7C--%7C../../images/thumb/thumb_3437782039_01b4045c0f.jpg%7C--%7C3%7C--%7C../../images/thumb/thumb_5601175300_0f1d73ffe8.jpg%7C--%7C4%7C--%7C', '');

-- --------------------------------------------------------

--
-- Table structure for table `kbimages`
--

CREATE TABLE IF NOT EXISTS `kbimages` (
  `imglink` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kbimages`
--

INSERT INTO `kbimages` (`imglink`) VALUES
('../../images/112_size_1024x600_bora-bora-1920-1200-1999.jpg'),
('../../images/Chrysanthemum.jpg'),
('../../images/Desert.jpg'),
('../../images/hdwallpapers272.jpg'),
('../../images/Hydrangeas.jpg'),
('../../images/Koala.jpg'),
('../../images/Lighthouse.jpg'),
('../../images/Penguins.jpg'),
('../../images/Tulips.jpg'),
('../../images/Jellyfish.jpg'),
('../../images/world-panoramas-scenery-widescreen-wallpaper-1.jpg'),
('../../images/4chan-w1299606937731.jpg'),
('../../images/244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg'),
('../../images/607_size_1024x600_500-1920x1200.jpg'),
('../../images/652_size_1024x600_955-1600x1200.jpg'),
('../../images/680_size_1024x600_1133-1680x1050.jpg'),
('../../images/1024x768-free-wallpaper.jpg'),
('../../images/384351_10150386129726852_377366401851_8724556_1904490812_n.jpg'),
('../../images/21082011.jpg'),
('../../images/3437782039_01b4045c0f.jpg'),
('../../images/5601175300_0f1d73ffe8.jpg'),
('../../images/great-white-shark-wallpapers-1024-600.jpg'),
('../../images/growing-aurora-wallpaper-pack1.jpg'),
('../../images/hd-wallpaper-30.jpg'),
('../../images/image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg'),
('../../images/Lake-Wallpapers-Mist-Lake-800x600.jpg'),
('../../images/lightening_wallpaper_02_1024.jpg'),
('../../images/Navarre_1024.jpg'),
('../../images/simpicity-green-orange.jpg'),
('../../images/wall1.png'),
('../../images/47e0f293e0_48159614_o2.jpg'),
('../../images/black_sabbath_wallpaper.jpg'),
('../../images/Black_Sabbath_Wallpaper_1440x900_wallpaperhere.jpg'),
('../../images/Capture.PNG'),
('../../images/logOnScreen.jpg'),
('../../images/metallica-2_1024x768.jpg'),
('../../images/Oak-Wood-Floor-783-3-.jpg'),
('../../images/Simplicity_Wallpaper_by_jostef.jpg'),
('../../images/VAIO09img1Wallpaper1024x600.jpg'),
('../../images/ViDAwin7wallpaper.png'),
('../../images/wallpapers_by_egorushka.jpg'),
('../../images/yoritsukibyday.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `kblog`
--

CREATE TABLE IF NOT EXISTS `kblog` (
  `status` int(10) NOT NULL DEFAULT '0',
  `keycode` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kblog`
--

INSERT INTO `kblog` (`status`, `keycode`) VALUES
(0, 'kotor');

-- --------------------------------------------------------

--
-- Table structure for table `lore_eng`
--

CREATE TABLE IF NOT EXISTS `lore_eng` (
  `lmlang` text,
  `lmname` text,
  `lmtext` text,
  `lmimages` text,
  `lmtown` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lore_eng`
--

INSERT INTO `lore_eng` (`lmlang`, `lmname`, `lmtext`, `lmimages`, `lmtown`) VALUES
('eng', 'zdjcsdkjzxcvzxczxcnzkxnskjdcskd', 'xkjbxkjbvxckvjbxcvkjxcvkcxjv', '%7C--%7C1%7C--%7C../../images/thumb/thumb_4chan-w1299606937731.jpg%7C--%7C2%7C--%7C../../images/thumb/thumb_world-panoramas-scenery-widescreen-wallpaper-1.jpg%7C--%7C3%7C--%7C../../images/thumb/thumb_Jellyfish.jpg%7C--%7C4%7C--%7C', 'Omashu'),
('eng', 'AsdfGhj', 'jk%2Cjhk%2Cjhk%2Cjk%2Cjkj%2C%20jdke%20jfiirtu%20sjdjdjwrbbdjv%20wejpoiqwe%20jjfirituuqpkks%0Ajnk%20eeej%20fjrhtuuhf%20jjfhriih%20%0Ajk%2Cjhk%2Cjhk%2Cjk%2Cjkj%2C%20jdke%20jfiirtu%20sjdjdjwrbbdjv%20wejpoiqwe%20jjfirituuqpkks%0Ajnk%20eeej%20fjrhtuuhf%20jjfhriihjk%2Cjhk%2Cjhk%2Cjk%2Cjkj%2C%20jdke%20jfiirtu%20sjdjdjwrbbdjv%20wejpoiqwe%20jjfirituuqpkks%0Ajnk%20eeej%20fjrhtuuhf%20jjfhriih', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_47e0f293e0_48159614_o2.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_simpicity-green-orange.jpg%7C--%7C4%7C--%7C', 'Veronaville');

-- --------------------------------------------------------

--
-- Table structure for table `lore_rus`
--

CREATE TABLE IF NOT EXISTS `lore_rus` (
  `lmlang` text,
  `lmname` text,
  `lmtext` text,
  `lmimages` text,
  `lmtown` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `lore_yug`
--

CREATE TABLE IF NOT EXISTS `lore_yug` (
  `lmlang` text,
  `lmname` text,
  `lmtext` text,
  `lmimages` text,
  `lmtown` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `news_eng`
--

CREATE TABLE IF NOT EXISTS `news_eng` (
  `nmlang` text,
  `nmmain` text,
  `nmlink2` text,
  `nmname` text,
  `nmtitle` text,
  `nmtext` text,
  `nmvideo` text,
  `nmimage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news_eng`
--

INSERT INTO `news_eng` (`nmlang`, `nmmain`, `nmlink2`, `nmname`, `nmtitle`, `nmtext`, `nmvideo`, `nmimage`) VALUES
('eng', 'image', 'catering%20facilities', 'testing%20chars%3A', 'testing%20chars%3A', 'asd%20%C5%A1%C4%91%C5%BE%20%C5%A0%C4%90%C5%BD%20%C4%8C%C4%86%20%C4%8D%C4%87', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_world-panoramas-scenery-widescreen-wallpaper-1.jpg'),
('eng', 'video', 'events', 'ide%20zmaj', 'ide%20zmaj', 'wefhsfsd%20%0A%20d%0Af%20dfg%20dfg%20dufhg%20dugh%20dfigu%20dfigu%20dfgiu%20hdf%0A%0Awefhsfsd%20%0A%20d%0Af%20dfg%20dfg%20dufhg%20dugh%20dfigu%20dfigu%20dfgiu%20hdfwefhsfsd%20%0A%20d%0Af%20dfg%20dfg%20dufhg%20dugh%20dfigu%20dfigu%20dfgiu%20hdf', 'http%3A%2F%2Fwww.youtube.com%2Fembed%2FtdegXjw5TKk', '..%2F..%2Fimages%2Fthumb%2Fthumb_1024x768-free-wallpaper.jpg'),
('eng', 'image', 'events', 'asd1', 'asd1', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_Koala.jpg'),
('eng', 'image', 'events', 'asd12', 'asd12', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_hdwallpapers272.jpg'),
('eng', 'image', 'events', 'asd123', 'asd123', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_Desert.jpg'),
('eng', 'image', 'events', 'asd1234', 'asd1234', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_112_size_1024x600_bora-bora-1920-1200-1999.jpg'),
('eng', 'image', 'events', 'asd12345', 'asd12345', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg'),
('eng', 'image', 'events', 'asd123456', 'asd123456', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_Lighthouse.jpg'),
('eng', 'image', 'events', 'asd1234567', 'asd1234567', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_image-wallpaper-1024-600-Ukraine-The-Odessa-Hotel-Ukrainian-Ni729857.jpg'),
('eng', 'image', 'events', 'asd12345678', 'asd12345678', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_21082011.jpg'),
('eng', 'image', 'events', 'asd123456789', 'asd123456789', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg'),
('eng', 'image', 'events', 'asd12345678910', 'asd12345678910', 'sdcsc', '', '..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg'),
('eng', 'image', 'neutral', 'aassdd', 'aassdd', 'aassdd%20aassdd%20aassdd%0Aaassdd%20aassdd%20aassdd', '', '..%2F..%2Fdependences%2FnewsLogo.png');

-- --------------------------------------------------------

--
-- Table structure for table `news_rus`
--

CREATE TABLE IF NOT EXISTS `news_rus` (
  `nmlang` text,
  `nmmain` text,
  `nmlink2` text,
  `nmname` text,
  `nmtitle` text,
  `nmtext` text,
  `nmvideo` text,
  `nmimage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `news_yug`
--

CREATE TABLE IF NOT EXISTS `news_yug` (
  `nmlang` text,
  `nmmain` text,
  `nmlink2` text,
  `nmname` text,
  `nmtitle` text,
  `nmtext` text,
  `nmvideo` text,
  `nmimage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `placesnservices_eng`
--

CREATE TABLE IF NOT EXISTS `placesnservices_eng` (
  `pmtype` text,
  `pmlang` text,
  `pmname` text,
  `pmMainImg` text,
  `pmtext` text,
  `pmimages` text,
  `pmtown` text,
  `pmstars` text,
  `link2site` text,
  `pmvisits` int(10) unsigned zerofill NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `placesnservices_eng`
--

INSERT INTO `placesnservices_eng` (`pmtype`, `pmlang`, `pmname`, `pmMainImg`, `pmtext`, `pmimages`, `pmtown`, `pmstars`, `link2site`, `pmvisits`) VALUES
('catering%20facilities', 'eng', 'asd', '..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg', 'asd', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C2%7C--%7C', 'Omashu', '4', 'none', 0000000052),
('services', 'eng', 'testing%20chars%3A', '..%2F..%2Fimages%2Fthumb%2Fthumb_world-panoramas-scenery-widescreen-wallpaper-1.jpg', 'asd%20%C5%A1%C4%91%C5%BE%20%C5%A0%C4%90%C5%BD%20%C4%8C%C4%86%20%C4%8D%C4%87', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Chrysanthemum.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Jellyfish.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Tulips.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_world-panoramas-scenery-widescreen-wallpaper-1.jpg%7C--%7C5%7C--%7C', 'Omashu', '5', 'none', 0000000000),
('venues', 'eng', 'it%60s%20a%20nice%20day', '..%2F..%2Fimages%2Fthumb%2Fthumb_Black_Sabbath_Wallpaper_1440x900_wallpaperhere.jpg', 'ijoidjdfgdfgdfgdfgdfg%0Adfgdfgdfg', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Capture.PNG%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Black_Sabbath_Wallpaper_1440x900_wallpaperhere.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_lightening_wallpaper_02_1024.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_simpicity-green-orange.jpg%7C--%7C5%7C--%7C', 'Veronaville', 'none', 'none', 0000000000),
('venues', 'eng', 'its%20a%20nice%20day', '..%2F..%2Fimages%2Fthumb%2Fthumb_Black_Sabbath_Wallpaper_1440x900_wallpaperhere.jpg', 'ijoidjdfgdfgdfgdfgdfg%0Adfgdfgdfg', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Capture.PNG%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Black_Sabbath_Wallpaper_1440x900_wallpaperhere.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_lightening_wallpaper_02_1024.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_simpicity-green-orange.jpg%7C--%7C5%7C--%7C', 'Veronaville', 'none', 'none', 0000000000),
('catering%20facilities', 'eng', 'qwero', '..%2F..%2Fimages%2Fthumb%2Fthumb_3437782039_01b4045c0f.jpg', 'hvdfkjvhdfhj%20djbv%20djfv%20dfhv%20dd%20jvndfvn%20dkf%20ndkfjv%20ndfvj%20sdcsdnvsdcnsdocsdcs%0Akdfvk%20djv%20dv%20dfvdlmdlv%20dfmlk%20mdlfk%20mvdl%20dm%20d%20d%20dl%20%20sdcsdcisbdcisdbcsudcbs%0Akmdlk%20dfkl%20dmfvl%20kdm%20dl%20dfldfl%20kdmfv%20df%20dkldv%20df%20%20sdcsdcbsidcbsdcbsd%20sdcsdc%0Adfjvndfiv%20ndfvi%20dfn%20jdfv%20df%20vodsfvn%20dnv%20difv%20sdjcsdcsydcsbc%20sdchbsdc%20sdcsdc%0Andvfvn%20dv%20nvnvn%20vn%20nvd%20sdbsdhybsd%20sdchbscsuh%20wcuwhceuhcusdhsdc%20sdc%0Adfv%20dnfv%20dvjdfvn%20dfvn', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg%7C--%7C2%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_21082011.jpg%7C--%7C3%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_3437782039_01b4045c0f.jpg%7C--%7C4%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg%7C--%7C5%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_great-white-shark-wallpapers-1024-600.jpg%7C--%7C6%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_Black_Sabbath_Wallpaper_1440x900_wallpaperhere.jpg%7C--%7C7%7C--%7C', 'Veronaville', '3', 'http%3A%2F%2Fwww.mydick.com', 0000000011);

-- --------------------------------------------------------

--
-- Table structure for table `placesnservices_rus`
--

CREATE TABLE IF NOT EXISTS `placesnservices_rus` (
  `pmtype` text,
  `pmlang` text,
  `pmname` text,
  `pmMainImg` text,
  `pmtext` text,
  `pmimages` text,
  `pmtown` text,
  `pmstars` text,
  `link2site` text,
  `pmvisits` int(10) unsigned zerofill NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `placesnservices_yug`
--

CREATE TABLE IF NOT EXISTS `placesnservices_yug` (
  `pmtype` text,
  `pmlang` text,
  `pmname` text,
  `pmMainImg` text,
  `pmtext` text,
  `pmimages` text,
  `pmtown` text,
  `pmstars` text,
  `link2site` text,
  `pmvisits` int(10) unsigned zerofill NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `placesnservices_yug`
--

INSERT INTO `placesnservices_yug` (`pmtype`, `pmlang`, `pmname`, `pmMainImg`, `pmtext`, `pmimages`, `pmtown`, `pmstars`, `link2site`, `pmvisits`) VALUES
('venues', 'yug', 'tru%C4%87', '..%2F..%2Fimages%2Fthumb%2Fthumb_great-white-shark-wallpapers-1024-600.jpg', 'asasasdasd%20ker%20!', '%7C--%7C1%7C--%7C..%2F..%2Fimages%2Fthumb%2Fthumb_great-white-shark-wallpapers-1024-600.jpg%7C--%7C2%7C--%7C', 'Veronaville', 'none', 'none', 0000000002);

-- --------------------------------------------------------

--
-- Table structure for table `town`
--

CREATE TABLE IF NOT EXISTS `town` (
  `tmname` text,
  `tmimage` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `town`
--

INSERT INTO `town` (`tmname`, `tmimage`) VALUES
('Omashu', '..%2F..%2Fimages%2Fthumb%2Fthumb_5601175300_0f1d73ffe8.jpg'),
('Konoha', '..%2F..%2Fimages%2Fthumb%2Fthumb_simpicity-green-orange.jpg'),
('Veronaville', '..%2F..%2Fimages%2Fthumb%2Fthumb_244_size_1024x600_grape-hill-in-sunlight-wallpapers_8051_1600x1200.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
