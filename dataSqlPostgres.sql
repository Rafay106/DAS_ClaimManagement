PGDMP          &                {            Claim_Management    15.4    15.3     Y           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Z           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            [           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            \           1262    29515    Claim_Management    DATABASE     �   CREATE DATABASE "Claim_Management" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 "   DROP DATABASE "Claim_Management";
                postgres    false            L          0    29516    _city 
   TABLE DATA           @   COPY public._city (id, name, state_id, active_flag) FROM stdin;
    public          postgres    false    214   �       M          0    29520    _claim 
   TABLE DATA           �   COPY public._claim (id, claim_for, bill_date, bill_no, amount, submit_date, place, approved_date, claimer_id, approver_id, status_id, comment, active_flag, created_at) FROM stdin;
    public          postgres    false    215          N          0    29531    _claim_status 
   TABLE DATA           ?   COPY public._claim_status (id, value, active_flag) FROM stdin;
    public          postgres    false    216   %       O          0    29535    _designation 
   TABLE DATA           C   COPY public._designation (id, name, code, active_flag) FROM stdin;
    public          postgres    false    217   t       P          0    29539    _du 
   TABLE DATA           :   COPY public._du (id, name, code, active_flag) FROM stdin;
    public          postgres    false    218   �       Q          0    29546 	   _employee 
   TABLE DATA             COPY public._employee (id, name, sex, email, mobile_no, emp_type_flag, isu_id, du_id, city_id, state_id, designation_id, grade_id, conf_date, prob_start_date, prob_end_date, prob_duration, prob_extension_duration, lwd, username, pwd, active_flag) FROM stdin;
    public          postgres    false    219   �       R          0    29564    _grade 
   TABLE DATA           =   COPY public._grade (id, name, code, active_flag) FROM stdin;
    public          postgres    false    220   
       S          0    29571    _isu 
   TABLE DATA           ;   COPY public._isu (id, name, code, active_flag) FROM stdin;
    public          postgres    false    221   '       T          0    29578    _state 
   TABLE DATA           7   COPY public._state (id, name, active_flag) FROM stdin;
    public          postgres    false    222   D       U          0    29582    _user 
   TABLE DATA           �   COPY public._user (id, employee_id, code, name, email, dob, mobile_no, current_address, city_id, state_id, doj, user_type_id, pswd, pwd_set_date, active_flag) FROM stdin;
    public          postgres    false    223   a       V          0    29594 
   _user_type 
   TABLE DATA           A   COPY public._user_type (id, name, code, active_flag) FROM stdin;
    public          postgres    false    224   ~       L   D   x�3��J�,(-�4�4�2�MA��9�rS!lN�����rN# ϔ�;1��1�tL/J3c���� I^      M      x������ � �      N   ?   x�3�H�K��K�4�2�t,((�/KMr�9�R�R�K�N�Ģ̴�����<��=... �U|      O   L   x�3��LNU(J-�LI�+�440�4�2�t�,JM.�/�4s��e�)�&�%�������&�0�1XY� ���      P      x������ � �      Q      x������ � �      R      x������ � �      S      x������ � �      T      x������ � �      U      x������ � �      V      x������ � �     