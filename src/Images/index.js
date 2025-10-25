import adobeXd from './Skills/adobe-xd.svg';
import adobeaudition from './Skills/adobeaudition.svg';
import afterEffects from './Skills/after-effects.svg';
import angular from './Skills/angular.svg';
import aws from './Skills/aws.svg';
import azure from './Skills/azure.svg';
import blender from './Skills/blender.svg';
import bootstrap from './Skills/bootstrap.svg';
import bulma from './Skills/bulma.svg';
import c from './Skills/c.svg';
import canva from './Skills/canva.svg';
import capacitorjs from './Skills/capacitorjs.svg';
import coffeescript from './Skills/coffeescript.svg';
import cplusplus from './Skills/cplusplus.svg';
import csharp from './Skills/csharp.svg';
import css from './Skills/css.svg';
import dart from './Skills/dart.svg';
import deno from './Skills/deno.svg';
import django from './Skills/django.svg';
import docker from './Skills/docker.svg';
import fastify from './Skills/fastify.svg';
import figma from './Skills/figma.svg';
import firebase from './Skills/firebase.svg';
import flutter from './Skills/flutter.svg';
import gcp from './Skills/gcp.svg';
import gimp from './Skills/gimp.svg';
import git from './Skills/git.svg';
import go from './Skills/go.svg';
import graphql from './Skills/graphql.svg';
import haxe from './Skills/haxe.svg';
import html from './Skills/html.svg';
import illustrator from './Skills/illustrator.svg';
import ionic from './Skills/ionic.svg';
import java from './Skills/java.svg';
import javascript from './Skills/javascript.svg';
import julia from './Skills/julia.svg';
import kotlin from './Skills/kotlin.svg';
import lightroom from './Skills/lightroom.svg';
import markdown from './Skills/markdown.svg';
import materialui from './Skills/materialui.svg';
import matlab from './Skills/matlab.svg';
import memsql from './Skills/memsql.svg';
import microsoftoffice from './Skills/microsoftoffice.svg';
import mongoDB from './Skills/mongoDB.svg';
import mysql from './Skills/mysql.svg';
import nextJS from './Skills/nextJS.svg';
import nginx from './Skills/nginx.svg';
import numpy from './Skills/numpy.svg';
import nuxtJS from './Skills/nuxtJS.svg';
import opencv from './Skills/opencv.svg';
import photoshop from './Skills/photoshop.svg';
import php from './Skills/php.svg';
import picsart from './Skills/picsart.svg';
import postgresql from './Skills/postgresql.svg';
import premierepro from './Skills/premierepro.svg';
import prisma from './Skills/prisma.svg';
import python from './Skills/python.svg';
import pytorch from './Skills/pytorch.svg';
import react from './Skills/react.svg';
import ruby from './Skills/ruby.svg';
import selenium from './Skills/selenium.svg';
import sketch from './Skills/sketch.svg';
import strapi from './Skills/strapi.svg';
import svelte from './Skills/svelte.svg';
import swift from './Skills/swift.svg';
import tailwind from './Skills/tailwind.svg';
import tensorflow from './Skills/tensorflow.svg';
import typescript from './Skills/typescript.svg';
import unity from './Skills/unity.svg';
import vitejs from './Skills/vitejs.svg';
import vue from './Skills/vue.svg';
import vuetifyjs from './Skills/vuetifyjs.svg';
import webix from './Skills/webix.svg';
import wolframalpha from './Skills/wolframalpha.svg';
import wordpress from './Skills/wordpress.svg';
import pandas from './Skills/pandas.svg';
import scikitlearn from './Skills/scikit-learn.svg';
import dotnet from './Skills/dotnet.svg';
import dotnetcore from './Skills/dotnetcore.svg'
import kubernetes from './Skills/kubernetes.svg'
import linux from './Skills/linux.svg'
import sqlalchemy from './Skills/sqlalchemy.svg'
import fastapi from './Skills/fastapi.svg'
import nodejs from './Skills/nodejs.svg'
import github from './Skills/github.svg'
import tableau from './Skills/tableau.svg'
import nessus from'./Skills/nessus.svg'
import metasploit from './Skills/metasploit.svg'
import cpt from './Skills/cisco-packet-tracer.svg'
import express from './Skills/Express.svg'
import linkedin from './Skills/linkedin.svg'
import leetcode from './Skills/leetcode.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'metasploit':
            return metasploit;
        case 'linkedin':
            return linkedin;
        case 'leetcode':
            return leetcode;
        case 'express':
            return express;
        case 'html':
            return html;
        case 'cisco-packet-tracer':
            return cpt;
        case 'photoshop':
            return photoshop;
        case 'nessus':
            return nessus;
        case 'github':
            return github;
        case 'tableau':
            return tableau;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'nodejs':
            return nodejs;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'prisma':
            return prisma;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        case 'pandas':
            return pandas;
        case 'sklearn':
            return scikitlearn;
        case 'dotnet':
            return dotnet;
        case 'dotnetcore':   
            return dotnetcore;
        case 'kubernetes':
            return kubernetes;
        case 'linux':
            return linux;
        case 'sqlalchemy':
            return sqlalchemy;
        case 'fastapi':
            return fastapi;
        default:
            break;
    }
}
