FROM continuumio/miniconda3:4.8.2

RUN conda install conda-build conda-verify anaconda-client -y
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]